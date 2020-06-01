const server = require('./api/server.js');

// const PORT = process.env.PORT || 4000;
// server.listen(PORT, () => {
//   console.log(`\n=== Server listening on port ${PORT} ===\n`);
// });

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});
  

module.exports = server;