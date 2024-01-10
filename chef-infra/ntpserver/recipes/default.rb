#
# Cookbook:: ntpserver
# Recipe:: default
#
# Copyright:: 2024, The Authors, All Rights Reserved.
include_recipe 'ntpserver::ntp-pkg'
include_recipe 'ntpserver::ntp-file'
include_recipe 'ntpserver::ntp-svc'