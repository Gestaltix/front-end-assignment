FROM ubuntu:16.04

RUN apt-get update && apt-get upgrade -y && apt-get install -qqy \
    wget \
    bzip2 \
    nodejs \
    npm

RUN npm install -g n
RUN n 9.11.1

RUN echo 'export PATH=/opt/miniconda/bin:$PATH' > /etc/profile.d/conda.sh && \
    wget --quiet https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda.sh && \
    /bin/bash ~/miniconda.sh -b -p /opt/miniconda && \
    rm ~/miniconda.sh

WORKDIR /front-end-assignment

COPY ./package.json /front-end-assignment/
COPY ./package-lock.json /front-end-assignment/

RUN npm install

COPY ./ /front-end-assignment/

RUN npm run build

EXPOSE 3000