FROM node:16

RUN apt-get update && apt-get upgrade -y

WORKDIR /app
ADD package*.json .
RUN npm install

ADD app.js .

CMD ["node", "app.js"]