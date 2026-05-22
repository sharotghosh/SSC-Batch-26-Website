const express = require('express');
const router = express.Router();

// Example GET endpoint
router.get('/', (req, res) => {
  res.json({ message: 'Achievements API placeholder' });
});

module.exports = router;
