const express = require('express');
const router = express.Router();
const SoundMix = require('../models/soundsmix');

// GET - Obtener todos los sound mixes
router.get('/', async (req, res) => {
    try {
        const soundMixes = await SoundMix.find(); 
        res.json(soundMixes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;