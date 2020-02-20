FROM node:12-stretch AS devbuild
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

FROM alpine:latest 
RUN apk add --update nodejs 
RUN addgroup -S node && adduser -S node -G node
USER node
RUN mkdir /home/node/code
WORKDIR /home/node/code
COPY --from=devbuild --chown=node:node /app .
CMD ["node", "index.js"]