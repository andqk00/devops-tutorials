# Web Server file configuration
file '/var/www/html/index.html' do
    content "This is my Chef Infra configured Web Server file\n"
    action :create
end