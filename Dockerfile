FROM node:20-alpine AS builder
WORKDIR /app
# Ensure compatibility for binaries that expect glibc on Alpine
RUN apk add --no-cache libc6-compat
COPY package*.json ./
# Prefer reproducible installs; fallback if lockfile is missing
RUN npm ci || npm install --no-audit --no-fund
COPY . .
RUN npm run build

# Minimal distroless runtime: no OS packages, no vulnerabilities
FROM gcr.io/distroless/nodejs20-debian12:nonroot
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/serve ./node_modules/serve
EXPOSE 8996
ENTRYPOINT ["/nodejs/bin/node"]
CMD ["/app/node_modules/serve/bin/serve.js", "-s", "dist", "-l", "8996"]
