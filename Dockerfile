FROM node:10-alpine
EXPOSE 3000
RUN npm i -g typeorm

RUN mkdir -p /usr/src/app/client
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
RUN cd /usr/src/app && npm ci && npm prune --production

COPY client/package.json /usr/src/app/client
COPY client/package-lock.json /usr/src/app/client
WORKDIR /usr/src/app/client
RUN sudo npm i -g @angular/cli && npm ci

COPY . /usr/src/app

WORKDIR /usr/src/app/client
RUN npm run build && rm -rf node_modules

WORKDIR /usr/src/app
CMD npm start
