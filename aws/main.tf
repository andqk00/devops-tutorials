terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"

  # cloud {
  #   organization = "AnDQK"
  #   workspaces {
  #     name = "devops-tutorials"
  #   }
  # }
}

provider "aws" {
  region     = "ap-southeast-1"
  # access_key = var.AWS_ACCESS_KEY_ID
  # secret_key = var.AWS_SECRET_ACCESS_KEY
}

resource "aws_instance" "app_server" {
  ami           = "ami-0b94777c7d8bfe7e3"
  instance_type = var.instance_type

  tags = {
    Name = var.instance_name
  }
}
