FROM node:22 AS build

WORKDIR /app
COPY . .

RUN npm i
RUN npm run build

# ───── Этап 2: Production-образ ─────

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]