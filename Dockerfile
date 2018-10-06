FROM marianobe/node-base
EXPOSE 3000
RUN npm i -g typeorm
RUN mkdir -p /usr/src/app
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
RUN cd /usr/src/app && npm ci
WORKDIR /usr/src/app
CMD npm start
