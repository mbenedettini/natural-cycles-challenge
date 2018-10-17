FROM node:10-alpine
EXPOSE 3000
RUN npm config set unsafe-perm true

RUN mkdir -p /usr/src/app/client
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
RUN cd /usr/src/app && npm ci && npm prune --production

COPY client/package.json /usr/src/app/client
COPY client/package-lock.json /usr/src/app/client
WORKDIR /usr/src/app/client
RUN npm i -g @angular/cli && npm ci

COPY src /usr/src/app/src
COPY client /usr/src/app/client
COPY jest.config.js /usr/src/app
COPY tsconfig.json /usr/src/app

WORKDIR /usr/src/app/client
RUN npm run build
RUN rm -rf node_modules
RUN rm -rf /usr/local/lib/node_modules/@angular

WORKDIR /usr/src/app
CMD npm start
