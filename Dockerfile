FROM nginx:alpine

# Copy site files into nginx html folder
COPY . /usr/share/nginx/html

EXPOSE 80
