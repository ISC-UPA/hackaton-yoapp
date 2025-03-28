FROM node:lts

WORKDIR /usr/src/api

COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]