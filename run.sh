#!/bin/bash

set -a
source .env
set +a

echo "Building and starting backend container..."
docker build -t cynerza-backend-web -f CYNERZA-ADMIN-BACKEND/Dockerfile CYNERZA-ADMIN-BACKEND/
docker run -d \
  --name cynerza-backend-web-container \
  -p 3776:3776 \
  -e MONGODB_ATLAS_URL="$MONGODB_ATLAS_URL" \
  -e CLOUDNIRY_CLOUD_NAME="$CLOUDNIRY_CLOUD_NAME" \
  -e CLOUDNIRY_API_KEY="$CLOUDNIRY_API_KEY" \
  -e CLOUDNIRY_API_SECRET="$CLOUDNIRY_API_SECRET" \
  -e ACCESS_TOKEN_SECRET="$ACCESS_TOKEN_SECRET" \
  -e REFRESH_TOKEN_SECRET="$REFRESH_TOKEN_SECRET" \
  --restart unless-stopped \
  cynerza-backend-web

echo "Building and starting frontend container..."
docker build -t cynerza-frontend-web -f Dockerfile .
docker run -d \
  --name cynerza-frontend-web-container \
  -p 8996:8996 \
  --restart unless-stopped \
  cynerza-frontend-web

echo "\nServices are starting up..."
echo "- Backend will be available at http://localhost:3776"
echo "- Frontend will be available at http://localhost:8996"