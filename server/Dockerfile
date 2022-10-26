FROM openjdk:11-jdk

ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]

ENV TZ Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ  /etc/localtime && echo $TZ > /etc/timezone

LABEL maintainer "Bytenari <bytenari@gmail.com>"
LABEL title = "Roobits Docker"
LABEL version = "0.0.1"
LABEL description = "Dockerfile to build an image of Roobits Project"

EXPOSE 80 443