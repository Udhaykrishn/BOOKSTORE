FROM node:alpine

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm ci

COPY . .

ENV REACT_APP_API_URL = http://server-app:3003

EXPOSE 5173

CMD [ "npm", "run", "dev" ]