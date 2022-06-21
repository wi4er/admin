FROM node:latest

WORKDIR /app

COPY ./public /app
COPY ./app/build /app/build

EXPOSE 5000

CMD ["npm", "start"]
