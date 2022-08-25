FROM node:16

WORKDIR /app

COPY package*.json ./

run npm install

COPY . .

ENV PORT = 3000

EXPOSE 3000

CMD ["npm", "start"]