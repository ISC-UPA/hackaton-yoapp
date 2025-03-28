FROM node:lts

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm install

RUN npm run web

EXPOSE 8080

CMD ["npx", "expo", "start", "--web"]