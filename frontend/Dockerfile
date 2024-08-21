FROM nginx:1.27.0

WORKDIR /usr/app

COPY dist .

COPY nginx.conf /etc/nginx/conf.d

#CMD ["nginx -g \"daemon off;\""]
CMD ["nginx", "-g", "daemon off;"]