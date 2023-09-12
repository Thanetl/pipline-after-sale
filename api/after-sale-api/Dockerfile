# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /api

# Copy the JAR file into the container
COPY target/after-sale-api.jar after-sale-api.jar

# Expose the port your application will run on
EXPOSE 8080

# Specify the command to run your application
CMD ["java", "-jar", "after-sale-api.jar"]
