FROM node:12-stretch AS appbuild
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .

FROM alpine:latest
RUN apk add --update nodejs
RUN addgroup -S node && adduser -S node -G node
USER node
#RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY --from=appbuild --chown=node:node /usr/src/app .
EXPOSE 3000
CMD ["node", "index.js"]