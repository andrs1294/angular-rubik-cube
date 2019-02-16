FROM node:10-alpine as build
WORKDIR /opt/
COPY . .
RUN npm i -g @angular/cli@6.2.9 && npm i && ng build --prod

FROM nginx:1.15-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /opt/dist/rubik/ .
EXPOSE 80