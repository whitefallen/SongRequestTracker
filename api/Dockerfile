FROM openjdk:17-jdk-alpine

RUN mkdir -p /api
WORKDIR /api
VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]