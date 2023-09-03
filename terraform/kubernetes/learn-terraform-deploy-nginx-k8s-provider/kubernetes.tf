# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

terraform {
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">= 2.0.1"
    }
  }
}

# variable "host" {
#   type = string
# }

# variable "client_certificate" {
#   type = string
# }

# variable "client_key" {
#   type = string
# }

# variable "cluster_ca_certificate" {
#   type = string
# }

provider "kubernetes" {
  # host = var.host

  # client_certificate     = base64decode(var.client_certificate)
  # client_key             = base64decode(var.client_key)
  # cluster_ca_certificate = base64decode(var.cluster_ca_certificate)

  config_path    = "~/.kube/config"
  config_context = "docker-desktop"
}

resource "kubernetes_namespace" "terraform" {
  metadata {
    name = "terraform"
  }
}

## Deployment
resource "kubernetes_deployment" "nginx" {
  metadata {
    name      = "scalable-nginx"
    namespace = kubernetes_namespace.terraform.metadata[0].name
    labels = {
      App = "ScalableNginx"
    }
  }

  spec {
    replicas = 4
    selector {
      match_labels = {
        App = "ScalableNginx"
      }
    }
    template {
      metadata {
        labels = {
          App = "ScalableNginx"
        }
      }
      spec {
        container {
          image = "nginx:1.25.1"
          name  = "scalable-nginx"

          port {
            container_port = 80
          }

          resources {
            limits = {
              cpu    = "0.5"
              memory = "512Mi"
            }
            requests = {
              cpu    = "250m"
              memory = "50Mi"
            }
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "nginx" {
  metadata {
    name = "nginx-example"
    namespace = kubernetes_namespace.terraform.metadata[0].name
  }
  spec {
    selector = {
      App = kubernetes_deployment.nginx.spec.0.template.0.metadata[0].labels.App
    }
    port {
      node_port   = 30201
      port        = 80
      target_port = 80
    }

    type = "NodePort"
  }
}
