FROM node:16-alpine

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm i

USER node

CMD ["npm", "start"]