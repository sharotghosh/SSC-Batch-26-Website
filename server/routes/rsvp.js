const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataFile = path.join(__dirname, '..', 'data', 'rsvp.json');

// Ensure file exists
if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, JSON.stringify([]));
}

router.post('/', (req, res) => {
  const { eventId, name, email, guests } = req.body;
  if (!eventId || !name || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const newEntry = { id: Date.now(), eventId, name, email, guests: guests || 1, timestamp: new Date().toISOString() };
  const records = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
  records.push(newEntry);
  fs.writeFileSync(dataFile, JSON.stringify(records, null, 2));
  res.json({ success: true, entry: newEntry });
});


module.exports = router;
