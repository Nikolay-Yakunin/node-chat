const express = require("express")

// env, ref later
const PORT = 3000

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server is working!',
    timestamp: new Date().toISOString(),
    status: 'OK'
  });
});

const server = app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🔗 Link: http://localhost:${PORT}/`);
});

process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down server...');
  server.close(() => {
    console.log('✅ Server closed successfully');
    process.exit(0);
  });
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  server.close(() => {
    process.exit(1);
  });
});