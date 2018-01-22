FROM node:latest

RUN mkdir -p /Doob
WORKDIR /usr/src/Doob

COPY package*.json ./

ENV NODE_ENV production

RUN npm config set proxy http://aterzani:Gennaio2018@proxyrm.wind.root.it:8080
RUN npm config set https-proxy http://aterzani:Gennaio2018@proxyrm.wind.root.it:8080
RUN npm i -g @adonisjs/cli

RUN npm install

COPY . ./
EXPOSE 3333
EXPOSE 8123

CMD adonis serve