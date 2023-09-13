# Use the official Node.js image as the base image
FROM node:14 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Use Nginx as the production server
FROM nginx:latest

# Copy the built Angular app to the Nginx web root directory
COPY --from=build /app/dist/product-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container is run
CMD ["nginx", "-g", "daemon off;"]


# Start the Angular development server
# CMD ["npm", "start"]
