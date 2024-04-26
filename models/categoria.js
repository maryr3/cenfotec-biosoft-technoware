const mongoose = require("mongoose");
const { Schema } = mongoose;

const categoriaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    estado:{
      type: Boolean,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Categoria", categoriaSchema);;