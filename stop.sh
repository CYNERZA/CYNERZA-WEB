#!/bin/bash

echo "Stopping and removing containers..."
docker stop cynerza-frontend-web-container cynerza-backend-web-container 2>/dev/null
docker rm cynerza-frontend-web-container cynerza-backend-web-container 2>/dev/null

echo "Containers stopped and removed."
