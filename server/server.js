const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
// Serve static files (HTML, CSS, images) from project root
app.use(express.static(path.join(__dirname, '..')));

// Routers
const directoryRouter = require('./routes/directory');
const rsvpRouter = require('./routes/rsvp');
const forumRouter = require('./routes/forum');
const achievementsRouter = require('./routes/achievements');

app.use('/api/directory', directoryRouter);
app.use('/api/rsvp', rsvpRouter);
app.use('/api/forum', forumRouter);
app.use('/api/achievements', achievementsRouter);

// Fallback for SPA style navigation (serve index.html for unknown routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Alumni portal backend running on http://localhost:${PORT}`);
});
