FROM node:20-alpine AS builder
WORKDIR /app
# Ensure compatibility for binaries that expect glibc on Alpine
RUN apk add --no-cache libc6-compat
COPY package*.json ./
# Prefer reproducible installs; fallback if lockfile is missing
RUN npm ci || npm install --no-audit --no-fund
COPY . .
RUN npm run build

# Minimal, non-root runtime: Caddy static file server
FROM caddy:2-alpine AS runner
WORKDIR /usr/share/caddy
COPY --from=builder /app/dist ./
COPY Caddyfile /etc/caddy/Caddyfile
USER caddy
EXPOSE 8996
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
