FROM node:20-alpine AS builder
WORKDIR /app
# Ensure compatibility for binaries that expect glibc on Alpine
RUN apk add --no-cache libc6-compat
COPY package*.json ./
# Prefer reproducible installs; fallback if lockfile is missing
RUN npm ci || npm install --no-audit --no-fund
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
RUN npm install -g serve \
    && npm cache clean --force \
    && rm -rf /usr/local/lib/node_modules/npm \
    && rm -f /usr/local/bin/npm /usr/local/bin/npx \
    && rm -rf /opt/yarn-v* /usr/local/lib/node_modules/corepack \
    && rm -f /usr/local/bin/corepack
COPY --from=builder /app/dist ./dist
ENV NODE_ENV=production
# Run as non-root for better container security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
EXPOSE 8996
CMD ["serve", "-s", "dist", "-l", "8996"]
