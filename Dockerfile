FROM node:20-alpine AS builder
WORKDIR /app
# Ensure compatibility for binaries that expect glibc on Alpine
RUN apk add --no-cache libc6-compat
COPY package*.json ./
# Prefer reproducible installs; fallback if lockfile is missing
RUN npm ci || npm install --no-audit --no-fund
COPY . .
RUN npm run build

# Non-root Nginx runtime to serve static SPA
FROM nginx:1.27-alpine AS runner
WORKDIR /usr/share/nginx/html
COPY --from=builder --chown=nginx:nginx /app/dist ./
COPY nginx.conf /etc/nginx/nginx.conf
USER nginx
EXPOSE 8996
# Default CMD from image runs nginx in foreground; config sets pid path suitable for non-root
