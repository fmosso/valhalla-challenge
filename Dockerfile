FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
COPY build ./build

RUN npm i --only=production

EXPOSE 3000

CMD ["node", "build/index.js"]