const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'directory.json');

// GET /api/directory?search=term
router.get('/', (req, res) => {
  const search = req.query.search ? req.query.search.toLowerCase() : '';
  let alumni = [];
  try {
    const raw = fs.readFileSync(dataPath, 'utf8');
    alumni = JSON.parse(raw);
  } catch (e) {
    console.error('Failed to read directory data:', e);
    return res.status(500).json({ error: 'Data load error' });
  }
  if (search) {
    alumni = alumni.filter(item =>
      item.name.toLowerCase().includes(search) ||
      (item.city && item.city.toLowerCase().includes(search)) ||
      (item.profession && item.profession.toLowerCase().includes(search))
    );
  }
  res.json(alumni);
});

module.exports = router;
