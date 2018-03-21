const mongoose = require('mongoose');
const Stickie = mongoose.model('Stickie');
const languages = require('../data-src/languages');

const INTERNAL_ERROR_MESSAGE = `Sorry, there's a problem on our side, please try again later`

const stickiesList = (req, res, next) => {
    let filter = {}
    if (req.query.lang && req.query.lang.split(",").length > 0) 
        filter.language = { $in: req.query.lang.split(",") }
    let skip
    if (req.query.skip)
        if(!parseInt(req.query.skip)) 
            return res.status(400).json({ message: 'Please provide a number for param skip' })
        skip = parseInt(req.query.skip)
    let limit
    if (req.query.limit)
        if(!parseInt(req.query.limit)) 
                return res.status(400).json({ message: 'Please provide a number for param limit' })
        limit = parseInt(req.query.limit)    

    Stickie.find(filter).skip(skip).limit(limit).exec((err, stickies) => {
      if (err) {
        console.error(`ERROR: ${err}`);
        return res.status(500).json({ message: INTERNAL_ERROR_MESSAGE });
      }
  
      return res.status(200).json({
        data: stickies,
        status: 200,
        message: "OK"
      });
    })
  }

const stickiesCreate = (req, res, next) => {
  
}

const stickiesReadOne = (req, res, next) => {
  
}

const stickiesUpdateOne = (req, res, next) => {
  
}

const stickiesDeleteOne = (req, res, next) => {
  
}

const languagesList = (req, res, next) => {
  
}

const editorThemesList = (req, res, next) => {
  
}

  
  module.exports = {
    stickiesList,
    stickiesCreate,
    stickiesReadOne,
    stickiesUpdateOne,
    stickiesDeleteOne,
  
    languagesList,
    editorThemesList
  };
