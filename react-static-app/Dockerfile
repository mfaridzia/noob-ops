FROM node:12-stretch AS devbuild
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=devbuild /app/build /usr/share/nginx/html