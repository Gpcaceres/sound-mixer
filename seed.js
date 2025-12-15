const mongoose = require('mongoose');
const SoundMix = require('./models/soundsmix');

mongoose.connect("mongodb+srv://SrJCBM:bdd2025@cluster0.tjvfmrk.mongodb.net/sound_mixer?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Conectado a MongoDB");
    
    // Datos para insertar
    const datos = [
      { id: "1", name: "rock" },
      { id: "2", name: "jazz" },
      { id: "3", name: "pop" },
      { id: "4", name: "classical" }
    ];
    
    // Insertar datos
    SoundMix.insertMany(datos)
      .then(result => {
        console.log("✅ Datos insertados correctamente:", result);
        process.exit(0);
      })
      .catch(error => {
        console.error("❌ Error al insertar:", error.message);
        process.exit(1);
      });
  })
  .catch(error => {
    console.error("Error de conexión:", error);
    process.exit(1);
  });