# Build stage
FROM node:18 AS builder
WORKDIR /usr/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18
WORKDIR /usr/app
COPY --from=builder /usr/app/.next ./.next
COPY --from=builder /usr/app/package.json ./package.json
COPY --from=builder /usr/app/package-lock.json ./package-lock.json
RUN npm install --only=production

CMD [ "npm", "start" ]