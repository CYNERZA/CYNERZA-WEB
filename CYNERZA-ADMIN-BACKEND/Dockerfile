FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

FROM node:20-alpine
WORKDIR /app
# Create and use a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY --from=builder --chown=appuser:appgroup /app/node_modules ./node_modules
COPY --from=builder --chown=appuser:appgroup /app/src ./src
COPY --from=builder --chown=appuser:appgroup /app/public ./public
RUN mkdir -p ./public/temp && chown -R appuser:appgroup ./public
VOLUME ["/app/public/temp"]
ENV NODE_ENV=production
ENV PORT=3776
EXPOSE 3776
USER appuser
CMD ["node", "--experimental-json-modules", "src/index.js"]
