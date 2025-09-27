FROM node:22
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY  . .
EXPOSE 2022
CMD ["npm","run","prod"]
