# Use the official Node.js 20 image from DockerHub
FROM node:22.13.0-alpine AS base

# Copy necessary files from the 'base' stage
COPY .output app

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["node", "./app/server/index.mjs"]