FROM maven:3.8.4 AS maven

WORKDIR /usr/src/app
COPY . /usr/src/app
# Compile and package the application to an executable JAR
RUN mvn package -DskipTests

FROM openjdk:17-jdk-alpine

ARG JAR_FILE=songrequesttracker.jar
ARG JAVA_OPTS
WORKDIR /opt/app

COPY --from=maven /usr/src/app/target/${JAR_FILE} /opt/app/

ENTRYPOINT ["sh","-c", "java ${JAVA_OPTS} -jar songrequesttracker.jar"]