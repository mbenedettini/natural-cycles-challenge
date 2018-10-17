FROM node:10-alpine
EXPOSE 3000
RUN npm config set unsafe-perm true
RUN mkdir -p /usr/src/app/client

# Backend build
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
WORKDIR /usr/src/app
RUN npm ci
COPY jest.config.js /usr/src/app
COPY tsconfig.json /usr/src/app
COPY src /usr/src/app/src
COPY src/views build/views
RUN ./node_modules/typescript/bin/tsc -p .

# Client build
COPY client/package.json /usr/src/app/client
COPY client/package-lock.json /usr/src/app/client
WORKDIR /usr/src/app/client
RUN npm i -g @angular/cli && npm ci
COPY client /usr/src/app/client
RUN npm run build
WORKDIR /usr/src/app
COPY src/public build/public

# Optimize image size
RUN rm -rf /usr/src/app/client
RUN rm -rf /usr/src/app/src
RUN rm -rf /usr/local/lib/node_modules/@angular
RUN rm -rf /root/.npm
RUN rm -rf /usr/src/app/node_modules/typeorm/browser

WORKDIR /usr/src/app
CMD npm start
