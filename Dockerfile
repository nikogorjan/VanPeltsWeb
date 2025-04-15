# ===========================
# 1) Build Stage
# ===========================
FROM node:18-alpine AS build
WORKDIR /app

# Copy package manifest & install
COPY package.json package-lock.json ./
RUN npm install

# Copy source code & build
COPY . .
RUN npm run build

# ===========================
# 2) Production Stage
# ===========================
FROM nginx:alpine

# Clear default NGINX files
RUN rm -rf /usr/share/nginx/html/*

# Copy our custom NGINX config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the React build output to NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 in the container
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
