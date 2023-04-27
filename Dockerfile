# Use an official Node.js runtime as the base image
FROM node:14

# Create and set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app's dependencies
RUN npm install

# Copy the rest of the app's source code to the container
COPY . .

# Expose the port on which the app listens
EXPOSE 3000

# Start the app inside the container
CMD [ "npm", "start" ]
