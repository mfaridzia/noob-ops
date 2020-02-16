FROM node:12-stretch

# create user
USER node 

# make the directory in the first place as node user
RUN mkdir /home/node/src

WORKDIR /home/node/src

# break it into two COPY instructions, to avoid doing a full npm i when file changes
COPY --chown=node:node package.json package-lock.json ./

# same as npm i but looking at package-lock.json file
RUN npm ci

COPY --chown=node:node . .

EXPOSE 3000

CMD ["node", "index.js"]