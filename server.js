const express = require('express');
var sslRedirect = require('heroku-ssl-redirect');
const path = require('path');

const app = express();

// Enable ssl redirect
app.use(sslRedirect(['production'], 301));

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
