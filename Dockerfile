# Use Node.js 20 on Alpine Linux for a lightweight base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies (cached unless package files change)
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port the app listens on
EXPOSE 3002

# Start the application
CMD ["npm", "start"]
