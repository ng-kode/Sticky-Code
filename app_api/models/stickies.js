const mongoose = require('mongoose');
const languages = require('../data-src/languages');

const stickieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    code: { type: String, required: true },
    language: {
      type: String,
      enum: languages,
      default: 'Text'
    }
})

mongoose.model('Stickie', stickieSchema)