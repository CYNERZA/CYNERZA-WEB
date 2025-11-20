FROM node:20-alpine AS builder
WORKDIR /app
# Ensure compatibility for binaries that expect glibc on Alpine
RUN apk add --no-cache libc6-compat
COPY package*.json ./
# Prefer reproducible installs; fallback if lockfile is missing
RUN npm ci || npm install --no-audit --no-fund
COPY . .
RUN npm run build

# Minimal, non-root runtime: NGINX (unprivileged) static server
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runner
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist ./
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Explicitly set non-root user to satisfy checks
USER 101
EXPOSE 8996
CMD ["nginx", "-g", "daemon off;"]
