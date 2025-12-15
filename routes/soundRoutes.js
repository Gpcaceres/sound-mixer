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

// GET - Obtener un sound mix por ID
router.get('/:id', async (req, res) => {
    try {
        const soundMix = await SoundMix.findOne({ id: req.params.id });
        if (!soundMix) {
            return res.status(404).json({ message: "Sound mix no encontrado" });
        }
        res.json(soundMix);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;