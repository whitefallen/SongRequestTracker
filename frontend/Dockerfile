FROM node as build
WORKDIR /app
COPY package.json .
RUN npm install

ARG REACT_APP_BACKENDAPI

COPY . .
RUN REACT_APP_BACKENDAPI=${REACT_APP_BACKENDAPI} \ 
npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]