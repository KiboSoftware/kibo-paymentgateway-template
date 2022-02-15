FROM node:14-alpine

WORKDIR /tmp
COPY package*.json ./
RUN yarn
COPY . .

EXPOSE 3000
CMD [ "node", "app.js" ]