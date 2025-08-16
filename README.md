# CYNERZA - Modern Web Interface                                            
[![GitHub stars](https://img.shields.io/github/stars/CYNERZA/CYNERZA-WEB?style=social)](https://github.com/CYNERZA/CYNERZA-WEB/stargazers)              
<p align="center">                                                            <img src="public/logo.png" alt="CYNERZA Logo" width="200"/>               </p>
                                                                             CYNERZA is a modern web application built with React, TypeScript, and Tailwind CSS, featuring a responsive design and beautiful UI components. This project serves as the official web interface for CYNERZA's AI tools and services.                                                                           
## ✨ Features                                                                                                                                          - 🎨 **Modern UI/UX** with responsive design
- 🚀 **Blazing Fast** performance with Vite                                 - 🎯 **Type Safety** with TypeScript                                        - 🎨 **Beautiful Components** with shadcn/ui and Tailwind CSS               - 🌙 **Dark Mode** support
- ⚡ **Optimized** production builds                                        - 🔒 **Secure** with proper environment handling                                                                                                        ## 🚀 Quick Start
                                                                            ### Prerequisites                                                           
- Node.js 20+ and npm 9+                                                    - Git                                                                       
### Local Development                                                                                                                                   1. **Clone the repository**
   ```bash                                                                     git clone https://github.com/CYNERZA/CYNERZA-WEB.git                        cd CYNERZA-WEB
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
   npm run dev

   # Terminal 2 - Start frontend
   cd ..
   npm run dev
   ```

5. **Access the application**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:3778](http://localhost:3778)

### Building for Production

```bash
# Build frontend
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **State Management**: Redux Toolkit & React Query
- **Form Handling**: React Hook Form
- **Animation**: Framer Motion
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js 20+
- **Framework**: Express.js
- **Database**: MongoDB
- **API**: RESTful
- **Authentication**: JWT
- **File Storage**: Cloudinary

## 📂 Project Structure

```
CYNERZA-WEB/
├── /public/                  # Static files
├── /src/                     # Frontend source code
│   ├── /components/          # Reusable UI components
│   ├── /hooks/               # Custom React hooks
│   ├── /lib/                 # Utility functions and configurations
│   ├── /pages/               # Application pages
│   ├── /featured/            # Redux slices
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

This project is private and proprietary. All rights reserved.

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
