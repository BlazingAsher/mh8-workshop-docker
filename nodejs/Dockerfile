FROM node:16

RUN apt-get update && apt-get upgrade -y

WORKDIR /app
ADD package*.json .
RUN npm install

ADD static .
ADD app.js .

ENV MASSEYHACKS_VARIABLE="BlueGreen"

CMD ["node", "app.js"]