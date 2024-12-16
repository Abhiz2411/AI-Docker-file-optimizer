export const SAMPLE_DOCKERFILE = `# Use a generic base image
FROM ubuntu:latest

# Install Node.js and other dependencies (inefficient way)
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    git \
    build-essential \
    nodejs \
    npm

# Set the working directory
WORKDIR /app

# Copy all files (including unnecessary ones) to the container
COPY . .

# Install all dependencies, including dev dependencies
RUN npm install

# Expose a hardcoded port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
`;