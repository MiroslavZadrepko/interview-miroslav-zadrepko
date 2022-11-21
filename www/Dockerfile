FROM node:alpine
WORKDIR /www
ADD package*.json ./
RUN npm install
ADD . .
CMD ["npm", "start"]
