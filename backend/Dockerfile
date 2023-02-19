FROM eclipse-temurin:17.0.5_8-jre-alpine

ARG CICD_RUN_TAG
ARG JAVA_OPTS
ENV CICD_RUN_TAG=$CICD_RUN_TAG
ENV ENV_JAVA_OPTS=$JAVA_OPTS

RUN echo $ENV_JAVA_OPTS

WORKDIR /opt/dpd-app

# Add a new user "dpd" other than admin for security purposes
RUN addgroup --system dpd && adduser -S -s /bin/false -G dpd dpd
# Add required privileges
RUN chown -R dpd:dpd /opt
# Change to new user
USER dpd

ENV PORT 8080
EXPOSE 8080

COPY /build/libs/backend-0.0.1-SNAPSHOT.jar /opt/app/backend-0.0.1-SNAPSHOT.jar
ENTRYPOINT java $ENV_JAVA_OPTS -jar /opt/app/backend-0.0.1-SNAPSHOT.jar
