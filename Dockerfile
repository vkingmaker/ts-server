FROM node:19.5.0-alpine

WORKDIR /app
LABEL Version="1.0.1"
LABEL maintainer="Victor Monday"

COPY . .

RUN npm i

EXPOSE 3001

CMD npm start