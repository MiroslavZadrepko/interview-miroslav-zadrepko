FROM node:alpine
WORKDIR /api
ADD package*.json ./
RUN npm install
EXPOSE 8080
ADD . /api
CMD ["npm", "start"]