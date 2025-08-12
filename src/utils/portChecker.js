import net from 'net';

export const isPortAvailable = (port) => {
  return new Promise((resolve) => {
    const server = net.createServer()
      .once('error', () => resolve(false))
      .once('listening', () => {
        server.close();
        resolve(true);
      })
      .listen(port);
  });
};

export const checkAndSetPort = async (isProduction = false) => {
  const port = isProduction ? 8996 : 8998; // 8996 for production, 8998 for development
  
  const isAvailable = await isPortAvailable(port);
  if (!isAvailable) {
    console.error(`\x1b[31m\n❌ Port ${port} is already in use. Please free this port and try again.\x1b[0m\n`);
    process.exit(1);
  }
  
  return port;
};
