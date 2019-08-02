const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  parent: { type : mongoose.SchemaTypes.ObjectId, ref: 'Categroy' }
})

module.exports = mongoose.model('Categroy', schema)