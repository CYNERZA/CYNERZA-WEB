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
  const port = isProduction ? 3776 : 3778; // 3776 for production, 3778 for development
  
  const isAvailable = await isPortAvailable(port);
  if (!isAvailable) {
    console.error(`\x1b[31m\n❌ Port ${port} is already in use. Please free this port and try again.\x1b[0m\n`);
    process.exit(1);
  }
  
  return port;
};
