# Backend Dockerfile 
FROM node:20 

WORKDIR /usr/src/app 

COPY package*.json ./ 

RUN npm install 

COPY . . 

COPY .env /usr/src/app/.env

EXPOSE 3000 

CMD ["node", "src/index.js"]