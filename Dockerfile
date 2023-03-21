FROM node:14.21.2-buster AS compile-image

WORKDIR /opt/ng
COPY package.json /opt/ng/package.json
RUN npm install
RUN npm install -g @angular/cli
ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN ng build --configuration production --base-href /onelink-payment/ --deploy-url /onelink-payment/

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=compile-image /opt/ng/dist/onelink-payment-web /usr/share/nginx/html
