#
# Cookbook:: webserver
# Recipe:: default
#
# Copyright:: 2024, The Authors, All Rights Reserved.
include_recipe 'ntpserver::default'
include_recipe 'webserver::apache-pkg'
include_recipe 'webserver::apache-file'
include_recipe 'webserver::apache-svc'