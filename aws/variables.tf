variable "instance_name" {
  description = "Value of the Name tag for the EC2 instance"
  type        = string
  default     = "ExampleAppServerInstance"
}

variable "instance_type" {
  description = "Value of the type for the EC2 instance"
  type        = string
  default     = "t2.micro"
}

# variable "AWS_ACCESS_KEY_ID" {
#   description = "AWS Access Key ID"
#   type        = string
# }

# variable "AWS_SECRET_ACCESS_KEY" {
#   description = "AWS Secret Access Key"
#   type        = string
# }