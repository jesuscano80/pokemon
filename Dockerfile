FROM node:14-alpine as builder
WORKDIR /src/usr/web
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


FROM nginx:1.13.3-alpine
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /src/usr/web/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]


