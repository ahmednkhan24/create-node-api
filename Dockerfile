FROM node:12

WORKDIR /node-app

COPY package*.json /node-app/

RUN npm install

COPY ./src/ /node-app/src/

EXPOSE 3000

CMD ["npm", "start"]