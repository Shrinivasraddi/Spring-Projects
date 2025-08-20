FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app/BackendSpring
COPY . .
RUN ./mvnw clean package -DskipTests
CMD ["java", "-jar", "target/BackendSpring-0.0.1-SNAPSHOT.jar"]