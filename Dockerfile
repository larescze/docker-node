FROM node:18.12.1-alpine3.16

# Create app directory
WORKDIR /usr/src/app

# Copy app dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

CMD [ "node", "server.js" ]