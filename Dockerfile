FROM node:8

WORKDIR /usr/local/app

RUN chown -R node:node /usr/local/app

USER node

COPY package*.json  ./
COPY .babelrc ./
RUN npm install


RUN mkdir src
ADD src/ src/

RUN npm run-script build

EXPOSE 8084

CMD ["npm", "run-script","launch"]
