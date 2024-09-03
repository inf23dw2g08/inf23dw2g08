FROM node:18.13.0-alpine3.17


RUN mkdir -p /usr/src/auth_Lab02
WORKDIR /usr/src/auth_Lab02


RUN apk update && apk upgrade
RUN apk add git

RUN apk add bash

RUN rm -rf ./node_modules
RUN rm -rf package-lock.json

COPY ./package.json .
RUN npm install

COPY . .

CMD npm start
