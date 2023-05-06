FROM ubuntu:22.04

RUN apt-get update && apt-get upgrade -y

ADD another-entrypoint.sh /

ENTRYPOINT ["/another-entrypoint.sh"]