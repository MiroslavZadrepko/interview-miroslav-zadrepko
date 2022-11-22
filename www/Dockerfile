FROM node:alpine
WORKDIR /www
ADD package*.json ./
RUN npm install
ADD . .
EXPOSE 3000
CMD ["npm", "start"]
