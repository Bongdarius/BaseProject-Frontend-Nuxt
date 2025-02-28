# Stage 1: Build the application
FROM node:22.14.0-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
COPY *.npmrc ./
RUN npm install -g pnpm
RUN pnpm install

# Copy source code to container
COPY . .

# Build the project using pnpm generate (or equivalent command)
RUN pnpm run generate

# Stage 2: Serve the application with Nginx
FROM nginx:alpine AS production

WORKDIR /usr/share/nginx/html

# Copy built files from the build stage to the Nginx container
COPY --from=build /app/dist/ . 

# Expose port 80 for the web server (default port for Nginx)
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]