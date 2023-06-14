FROM node:18.15

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# COPY .env ./.env

ENV PORT=8080
EXPOSE 8080
CMD ["npm","build"]