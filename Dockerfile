FROM eclipse-temurin:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy only the BackendSpring project (not the whole repo)
COPY SignUp/BackendSpring/ .

# Give mvnw execute permission (in case Render strips it)
RUN chmod +x mvnw

# Build the project
RUN ./mvnw clean package -DskipTests

# Run the jar
CMD ["java", "-jar", "target/BackendSpring-0.0.1-SNAPSHOT.jar"]
