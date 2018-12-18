FROM ubuntu:16.04

RUN apt-get update && apt-get upgrade && apt-get install npm \
    nodejs

RUN echo 'export PATH=/opt/miniconda/bin:$PATH' > /etc/profile.d/conda.sh && \
    wget --quiet https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda.sh && \
    /bin/bash ~/miniconda.sh -b -p /opt/miniconda && \
    rm ~/miniconda.sh

WORKDIR /frontend

COPY ./frontend/package.json /frontend/
COPY ./frontend/package-lock.json /frontend/

RUN npm install

COPY ./frontend /frontend

RUN npm run build
