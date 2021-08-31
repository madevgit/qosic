FROM node:14-alpine AS build
RUN mkdir -p /qos-website
WORKDIR /qos-website
COPY package.json package-lock.json /qos-website/

CMD npm install @craco/craco --save 
RUN npm install
COPY . /qos-website
CMD npm start
EXPOSE 3000
