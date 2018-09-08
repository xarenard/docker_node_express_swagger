FROM node:8

WORKDIR /usr/local/app

RUN chown -R node:node /usr/local/app

USER node

COPY package*.json  ./
RUN npm install


RUN mkdir src
ADD src/ src/

EXPOSE 8084

CMD ["npm", "start"]
