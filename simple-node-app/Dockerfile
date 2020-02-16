FROM node:12-stretch

USER node 

WORKDIR /home/node/src

COPY --chown=node:node index.js index.js

EXPOSE 8000

CMD ["node", "index.js"]