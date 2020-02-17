FROM alpine:latest
# install nodejs & npm with alpine packgae manager
RUN apk add --update nodejs npm
# add group & user
RUN addgroup -S node && adduser -S node -G node

USER node 

RUN mkdir /home/node/src

WORKDIR /home/node/src

COPY --chown=node:node package.json package-lock.json ./

RUN npm ci

COPY --chown=node:node . .

EXPOSE 3000

CMD ["node", "index.js"]