FROM openjdk:11-jre
COPY build/libs/roobits-*.jar app.jar
#ARG JAR_FILE=build/libs/roobits-0.0.1-SNAPSHOT.jar
#ADD ${JAR_FILE} docker-roobits.jar
ENTRYPOINT ["java", "-jar", "app.jar"]