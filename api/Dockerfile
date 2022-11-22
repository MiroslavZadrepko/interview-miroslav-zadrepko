FROM node:alpine

WORKDIR /api

ADD package*.json ./

RUN npm install

ADD . /api

EXPOSE 8080

CMD ["npm", "start"]