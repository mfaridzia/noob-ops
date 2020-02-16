FROM node:12-stretch

# create user
USER node 

# make the directory in the first place as node user
RUN mkdir /home/node/src

WORKDIR /home/node/src

# copy and change owner as node
COPY --chown=node:node . .

# same as npm i but looking at package-lock.json file
RUN npm ci

EXPOSE 3000

CMD ["node", "index.js"]