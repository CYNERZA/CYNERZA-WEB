FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src
COPY --from=builder /app/public ./public
RUN mkdir -p ./public/temp
VOLUME ["/app/public/temp"]
ENV NODE_ENV=production
ENV PORT=3776
EXPOSE 3776
CMD ["node", "--experimental-json-modules", "src/index.js"]
