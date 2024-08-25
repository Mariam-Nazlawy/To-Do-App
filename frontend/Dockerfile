FROM nginx:1.27.0

WORKDIR /usr/app


COPY dist ./dist/

#COPY nginx.conf /etc/nginx/conf.d
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]