// src/index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World from CI/CD pipeline xd' });
});

app.get('/health', (req, res) => {
  res.status(200).send('ok');
});

module.exports = app;

// Arrancar servidor SOLO si se ejecuta directamente y no es test
if (require.main === module && process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 8080; // Render inyecta PORT
  app.listen(PORT, () => {
    console.log(`API listening on ${PORT}`);
  });
}
