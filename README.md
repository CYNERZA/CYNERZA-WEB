# CYNERZA - Modern Web Interface

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/CYNERZA/CYNERZA-WEB?style=social)](https://github.com/CYNERZA/CYNERZA-WEB/stargazers)
[![Docker Pulls](https://img.shields.io/docker/pulls/cynerza/web)](https://hub.docker.com/r/cynerza/web)

<p align="center">
  <img src="public/logo.png" alt="CYNERZA Logo" width="200"/>
</p>

CYNERZA is a modern web application built with React, TypeScript, and Tailwind CSS, featuring a responsive design and beautiful UI components. This project serves as the official web interface for CYNERZA's AI tools and services.

## ✨ Features

- 🎨 **Modern UI/UX** with responsive design
- 🚀 **Blazing Fast** performance with Vite
- 🎯 **Type Safety** with TypeScript
- 🎨 **Beautiful Components** with shadcn/ui and Tailwind CSS
- 🌙 **Dark Mode** support
- 🐳 **Docker** containerization for easy deployment
- 🔄 **CI/CD** ready with GitHub Actions
- 🔒 **Secure** with proper environment handling
- ⚡ **Optimized** production builds

## 🚀 Quick Start

### Prerequisites

- Docker 20.10+ and Docker Compose (optional)
- Node.js 18+ and npm 9+ (only needed for development)
- Git
- MongoDB Atlas (for production) or local MongoDB (for development)

### Port Configuration

| Service  | Development Port | Production Port |
|----------|-----------------|-----------------|
| Frontend | 8998           | 8996           |
| Backend  | 3778           | 3776           |

### Running with Docker

1. **Clone the repository**
   ```bash
   git clone https://github.com/CYNERZA/CYNERZA-WEB.git
   cd CYNERZA-WEB
   ```

2. **Create a `.env` file**
   Copy the example environment file and update it with your configuration:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Build and start the containers**
   ```bash
   ./run-docker.sh
   ```
   This will:
   - Build both frontend and backend Docker images
   - Start both containers with the correct ports
   - Set up environment variables

4. **Access the application**
   - Frontend: http://localhost:8996
   - Backend API: http://localhost:3776

5. **Stopping the services**
   ```bash
   ./stop-docker.sh
   ```

### Local Development (Without Docker)

1. **Clone the repository**
   ```bash
   git clone https://github.com/CYNERZA/CYNERZA-WEB.git
   cd CYNERZA-WEB
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd CYNERZA-ADMIN-BACKEND
   npm install
   cd ..
   ```

4. **Start development servers**
   ```bash
   # In separate terminals:
   
   # Terminal 1 - Start backend
   cd CYNERZA-ADMIN-BACKEND
   npm run dev  # Runs on port 3778
   
   # Terminal 2 - Start frontend
   cd ..
   npm run dev  # Runs on port 8998
   ```
   - Frontend: [http://localhost:8998](http://localhost:8998)
   - Backend API: [http://localhost:3778](http://localhost:3778)

### Building for Production

### Frontend Production Build

1. **Build the application**
   ```bash
   npm run build  # Creates optimized production build in /dist
   ```

2. **Preview production build**
   ```bash
   npm run preview  # Serves the production build on port 8996
   ```
   Or use the combined command:
   ```bash
   npm run prod  # Builds and serves the production build
   ```

### Backend Production Build

1. **Start the production server**
   ```bash
   cd CYNERZA-ADMIN-BACKEND
   npm start  # Runs on port 3776
   ```
   Or use the production alias:
   ```bash
   npm run prod  # Sets NODE_ENV=production and starts the server
   ```

## 🐳 Docker Deployment

### Frontend

1. **Build the Docker image**
   ```bash
   docker build -t cynerza-web .
   ```

2. **Run the container**
   ```bash
   docker run -d --restart unless-stopped -p 8996:8996 --name cynerza-frontend cynerza-web
   ```

### Backend

1. **Build the Docker image**
   ```bash
   cd CYNERZA-ADMIN-BACKEND
   docker build -t cynerza-backend .
   ```

2. **Run the container**
   ```bash
   docker run -d \
     --restart unless-stopped \
     -p 3776:3776 \
     -e MONGODB_URI=your_mongodb_uri \
     --name cynerza-backend \
     cynerza-backend
   ```

### Docker Compose (Recommended)

1. Create a `docker-compose.yml` file:
   ```yaml
   version: '3.8'
   services:
     frontend:
       build: .
       ports:
         - "8996:8996"
       environment:
         - NODE_ENV=production
       restart: unless-stopped
     
     backend:
       build: ./CYNERZA-ADMIN-BACKEND
       ports:
         - "3776:3776"
       environment:
         - NODE_ENV=production
         - MONGODB_URI=mongodb://mongodb:27017/cynerza
       depends_on:
         - mongodb
       restart: unless-stopped
     
     mongodb:
       image: mongo:latest
       volumes:
         - mongodb_data:/data/db
       ports:
         - "27017:27017"
       restart: unless-stopped
   
   volumes:
     mongodb_data:
   ```

2. Start all services:
   ```bash
   docker-compose up -d
   ```

Access the application at [http://localhost:8996](http://localhost:8996)

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **State Management**: React Query
- **Form Handling**: React Hook Form
- **Animation**: Framer Motion
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **API**: RESTful
- **Authentication**: JWT
- **File Storage**: Cloudinary
- **Containerization**: Docker

## 📂 Project Structure

```
CYNERZA-WEB/
├── /public/                  # Static files
├── /src/                     # Frontend source code
│   ├── /components/          # Reusable UI components
│   ├── /hooks/               # Custom React hooks
│   ├── /lib/                 # Utility functions and configurations
│   ├── /pages/               # Application pages
│   ├── /styles/              # Global styles and Tailwind config
│   ├── /types/               # TypeScript type definitions
│   └── /utils/               # Helper functions
│
└── /CYNERZA-ADMIN-BACKEND/   # Backend source code
    ├── /src/
    │   ├── /controllers/     # Request handlers
    │   ├── /models/          # Database models
    │   ├── /routes/          # API routes
    │   ├── /utils/           # Utility functions
    │   ├── app.js            # Express app configuration
    │   └── index.js          # Server entry point
    └── package.json          # Backend dependencies
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Vite](https://vitejs.dev/) for the build tooling
- [Framer Motion](https://www.framer.com/motion/) for animations

## 🌐 Live Demo

Check out the live demo at [https://cynerza.com](https://cynerza.com)

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/CYNERZA">CYNERZA Team</a>
</p>
