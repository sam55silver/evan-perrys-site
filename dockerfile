FROM node:20-alpine3.18

WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

RUN npm install
RUN npm run build

ENV PORT=3000
ENV HOST=0.0.0.0

# Run the app when the container launches
CMD ["node", "./dist/server/entry.mjs"]

