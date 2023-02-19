FROM node:16.13.0 AS builder
ENV NODE_ENV production
# Env variables
ARG CICD_RUN_TAG
ARG ENVIRONMENT
ENV REACT_APP_CICD_RUN_TAG=$CICD_RUN_TAG
ENV APP_ENVIRONMENT=$ENVIRONMENT

RUN echo $APP_ENVIRONMENT

# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
# Install dependencies
RUN npm install
# Copy app files
COPY . .
# Build the app
RUN npm run build-${APP_ENVIRONMENT}
RUN echo $(ls -1)

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Env variables
ARG CICD_RUN_TAG
ARG ENVIRONMENT
ENV REACT_APP_CICD_RUN_TAG=$CICD_RUN_TAG
ENV APP_ENVIRONMENT=$ENVIRONMENT
# Copy built assets from builder
COPY --from=builder ./app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
