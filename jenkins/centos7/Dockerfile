FROM centos:7

RUN yum -y install openssh-server

RUN useradd jqka && \
    echo "123456" | passwd jqka --stdin && \
    mkdir /home/jqka/.ssh && \
    chmod 700 /home/jqka/.ssh

COPY jqka.pub /home/jqka/.ssh/authorized_keys

RUN chown jqka:jqka -R /home/jqka/.ssh/ && \
    chmod 600 /home/jqka/.ssh/authorized_keys

RUN /usr/sbin/sshd-keygen

RUN yum -y install mysql

RUN yum -y install unzip
RUN curl https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip -o awscliv2.zip
RUN unzip awscliv2.zip
RUN ./aws/install

CMD /usr/sbin/sshd -D
