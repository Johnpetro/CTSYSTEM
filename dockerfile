# 1. Use the official Node.js image from Docker Hub
FROM node:16

# 2. Set the working directory in the container
WORKDIR /app

# 3. Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# 4. Install Node.js dependencies
RUN npm install

# 5. Copy the application source code to the container
COPY . .

# 6. Expose the port your app runs on
EXPOSE 3000

# 7. Define the command to run your app
CMD ["node", "app.js"]
