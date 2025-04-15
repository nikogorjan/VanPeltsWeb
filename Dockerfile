# 1. Build stage
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy all files and build
COPY . .
RUN npm run build

# 2. Production stage
FROM nginx:alpine

# Remove default NGINX static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built React files from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
