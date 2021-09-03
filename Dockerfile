#FROM node:14-alpine AS build
#RUN mkdir -p /qos-website
#WORKDIR /qos-website
#COPY package.json package-lock.json /qos-website/
#
#CMD npm install @craco/craco --save
#RUN npm install
#COPY . /qos-website
#RUN npm run-script build
#RUN npm install -g serve
##COPY . /qos-website
##RUN npm start
#CMD serve build
#EXPOSE 5000


#FROM node:14-alpine AS builder
#
#WORKDIR /opt/web
#COPY package.json package-lock.json ./
#CMD npm install @craco/craco --save
#RUN npm install
#
#ENV PATH="./node_modules/.bin:$PATH"
#
#COPY . ./
#RUN npm run build
#
#FROM nginx:1.17-alpine
#RUN apk --no-cache add curl
#RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
#    chmod +x envsubst && \
#    mv envsubst /usr/local/bin
#COPY ./nginx.config /etc/nginx/nginx.template
#CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
#COPY --from=builder /opt/web/build /usr/share/nginx/html



# pull official base image
FROM node:14-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
