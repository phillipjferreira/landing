const express = require('express');
const sslRedirect = require('heroku-ssl-redirect');
const hsts = require('hsts');
const path = require('path');

const app = express();

// Enable ssl redirect
app.use(sslRedirect(['production'], 301));

// HSTS
app.use(
  hsts({
    maxAge: 31536000, // Must be at least 1 year to be approved
    includeSubDomains: true, // Must be enabled to be approved
    preload: true,
  })
);

// Init Middleware
app.use(express.json({ extended: false }));

// Require Routers

// Production build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
