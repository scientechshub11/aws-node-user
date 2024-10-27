FROM node:20-alpine
RUN mkdir -p /usr/src/app/src
WORKDIR /usr/src/app/src
COPY . .
RUN npm install
EXPOSE 8700
CMD ["node", "app.ts"]