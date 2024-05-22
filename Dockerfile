FROM node:21-alpine

WORKDIR /usr/src

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

COPY .next ./

EXPOSE 3000

CMD ["npm", "run", "dev"]