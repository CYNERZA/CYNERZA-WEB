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

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm 9+
- Git
- Docker (optional)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/CYNERZA/CYNERZA-WEB.git
   cd CYNERZA-WEB
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

```bash
npm run build
```

## 🐳 Docker Deployment

### Build the Docker Image

```bash
docker build -t cynerza-web .
```

### Run the Container

```bash
docker run -d --restart unless-stopped -p 7070:7070 --name cynerza-app cynerza-web
```

The application will be available at [http://localhost:7070](http://localhost:7070)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **State Management**: React Query
- **Form Handling**: React Hook Form
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Containerization**: Docker

## 📂 Project Structure

```
/src
  /components      # Reusable UI components
  /hooks          # Custom React hooks
  /lib            # Utility functions and configurations
  /pages          # Application pages
  /styles         # Global styles and Tailwind config
  /types          # TypeScript type definitions
  /utils          # Helper functions
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
