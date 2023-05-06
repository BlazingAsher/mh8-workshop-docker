FROM amazoncorretto:17

RUN apt-get update && apt-get upgrade -y

WORKDIR /app
ADD static .
ADD target/masseyhacks-docker-demo-jar-with-dependencies.jar masseyhacks-docker-demo.jar

ENV MASSEYHACKS_VARIABLE="BlueGreen"

CMD ["java", "-jar", "masseyhacks-docker-demo.jar"]