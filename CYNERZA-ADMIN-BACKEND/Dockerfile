FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src
COPY --from=builder /app/public ./public
RUN mkdir -p ./public/temp
COPY --from=builder /app/.env .
ENV NODE_ENV=production
ENV PORT=3776
EXPOSE 3776
CMD ["node", "--experimental-json-modules", "src/index.js"]
