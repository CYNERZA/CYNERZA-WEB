import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { app } from './app.js';
import { checkAndSetPort } from "./utils/portChecker.js";

dotenv.config();

const startServer = async () => {
    try {
        const isProduction = process.env.NODE_ENV === 'production';
        const port = await checkAndSetPort(isProduction);
        
        await connectDB();
        
        const server = app.listen(port, () => {
            console.log(`\n✅ Server is running on PORT \x1b[32m${port}\x1b[0m`);
            console.log(`🚀 Mode: ${isProduction ? '\x1b[33mProduction\x1b[0m' : '\x1b[36mDevelopment\x1b[0m'}\n`);
        });
        
        server.on('error', (error) => {
            console.error(`\n❌ Server error: ${error.message}\n`);
            process.exit(1);
        });
        
        process.on('SIGINT', () => {
            console.log('\n👋 Shutting down server...');
            server.close(() => {
                console.log('✅ Server closed');
                process.exit(0);
            });
        });
        
    } catch (error) {
        console.error(`\n❌ Fatal error: ${error.message}\n`);
        process.exit(1);
    }
};

startServer();