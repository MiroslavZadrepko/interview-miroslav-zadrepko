FROM node:alpine

WORKDIR /www

ADD package*.json ./

RUN npm install

ADD . .

EXPOSE 8080

CMD ["npm", "start"]
