FROM node:14-alpine AS builder
WORKDIR /tmp
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:14-alpine
ARG GIT_COMMIT
ENV NODE_ENV=development
ENV GIT_COMMIT=$GIT_COMMIT
WORKDIR /tmp
COPY package*.json ./
RUN npm install --production=true
COPY . .
COPY --from=builder /tmp/dist dist/
EXPOSE 3000
CMD ["npm", "start"]
