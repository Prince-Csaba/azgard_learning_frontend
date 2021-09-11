# Step 1
FROM node:12-alpine as build-step

RUN mkdir /app

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Stage 2
FROM nginx:1.17.1-alpine

COPY --from=build-step /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf