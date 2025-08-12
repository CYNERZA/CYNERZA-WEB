# Build stage
FROM node:18-alpine as builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built node modules and source code
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3776
ENV MONGODB_URL=${MONGODB_ATLAS_URL}
ENV CLOUDNIRY_CLOUD_NAME=${CLOUDNIRY_CLOUD_NAME}
ENV CLOUDNIRY_API_KEY=${CLOUDNIRY_API_KEY}
ENV CLOUDNIRY_API_SECRET=${CLOUDNIRY_API_SECRET}
ENV ACCESS_TOKEN_SECRET=${ACCESS_TOKEN_SECRET}
ENV REFRESH_TOKEN_SECRET=${REFRESH_TOKEN_SECRET}

# Expose the backend port
EXPOSE 3776

# Start the application
CMD ["node", "--experimental-json-modules", "src/index.js"]
