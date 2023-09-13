# Use an official Maven image as the build environment
FROM maven:3.8.4-openjdk-11 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven project file and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the source code into the container
COPY src ./src

# Build the JAR file
RUN mvn package -DskipTests

# Create a separate stage for the runtime image
FROM openjdk:11-jre-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the compiled JAR file from the build stage into the runtime image
COPY --from=build /app/target/after-sale-api-0.0.1.jar /app/after-sale-api.jar

# Expose the port your application will run on (if different from the default Spring Boot port 8080)
EXPOSE 8080

# Command to run the Spring Boot application when the container starts
CMD ["java", "-jar", "after-sale-api.jar"]
