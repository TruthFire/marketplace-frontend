FROM node:18-alpine as builder
WORKDIR /app
# Copy package.json and package-lock.json to the container
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code to the container
COPY . .
# Build the production version of the application
RUN npm run build
# Run the command to start the server
CMD ["npm", "start"]

FROM nginx:1.25.1-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ] 
