const mongoose = require('mongoose');
const Stickie = mongoose.model('Stickie');
const languages = require('../data-src/languages');
const editorThemes = require('../data-src/editorThemes')

const INTERNAL_ERROR_MESSAGE = `Sorry, there's a problem on our side, please try again later`

const finalRes = (res, status, message, data=null) => {
  if (!res || !status || !message) {
    throw new Error(`Please provide sufficient args (finalRes@controller/stickies.js)
                      Current args: ${arguements}`)
  }
    
  if (data) {
    return res.status(status).json({ status, message, data })
  } else {
    return res.status(status).json({ status, message })
  }
}

const stickiesList = (req, res, next) => {
    let filter = {}
    if (req.query.lang && req.query.lang.split(",").length > 0) 
        filter.language = { $in: req.query.lang.split(",") }
    let skip
    if (req.query.skip)
        if(!parseInt(req.query.skip)) 
          return finalRes(res, 400, 'Please provide a number for param skip')
        skip = parseInt(req.query.skip)
    let limit
    if (req.query.limit)
        if(!parseInt(req.query.limit)) 
          return finalRes(res, 400, 'Please provide a number for param limit')
        limit = parseInt(req.query.limit)    

    Stickie.find(filter).skip(skip).limit(limit).exec((err, stickies) => {
      if (err) {
        console.error(`ERROR: ${err}`);
        return finalRes(res, 500, INTERNAL_ERROR_MESSAGE);
      }
  
      return finalRes(res, 200, "OK", stickies);
    })
  }

const stickiesCreate = (req, res, next) => {
  const reqKeys = Object.keys(req.body);
  const stickieKeys = [ "title", "code" ]
  const missingKeys = stickieKeys.filter(v => !reqKeys.includes(v))
  if (missingKeys.length > 0) 
    return finalRes(res, 400, `${missingKeys.join(", ")} are missing in the request body`)
  let newStickie = {
    title: req.body.title,
    code: req.body.code
  }
  if (req.body.language) 
    newStickie.language = req.body.language
  Stickie.create(newStickie, (err, stickie) => {
    if (err) {
      console.error(`ERROR: ${err}`)
      if (err.name === "ValidationError") {
        return finalRes(res, 400, err.message)
      }
      return finalRes(res, 500, INTERNAL_ERROR_MESSAGE)
    }
    return finalRes(res, 201, "OK", stickie)
  })
}

const stickiesReadOne = (req, res, next) => {
  if (req.params && req.params.stickieId) {
    const { stickieId } = req.params
    Stickie.findById(stickieId).exec((err, stickie) => {
      if (err) {
        console.error(`ERROR: ${err}`);
        if (err.name === "CastError") {
          return finalRes(res, 400, "Please provide stickieId in valid format")
        } else {          
          return finalRes(res, 500, INTERNAL_ERROR_MESSAGE)
        }
      }

      if (!stickie) {
        return finalRes(res, 400, "stickieId not found")
      }

      return finalRes(res, 200, "OK", stickie)
    })
  } else {
    return finalRes(res, 400, "Please provide stickieId")
  }
}

const stickiesUpdateOne = (req, res, next) => {
  if (!req.params.stickieId) {
    return finalRes(res, 400, 'Please provide stickieId')
  }
  const { stickieId } = req.params
  Stickie.findById(stickieId).exec((err, stickie) => {
    if (err) {
      if (err.name === "CastError") {
        return finalRes(res, 400, "Please provide stickieId in valid format")
      } else {
        console.error(`ERROR: ${err}`);
        return finalRes(res, 500, INTERNAL_ERROR_MESSAGE)
      }
    }

    if (!stickie) {
      return finalRes(res, 400, "stickieId not found")
    }

    if (req.body.title) stickie.title = req.body.title;
    if (req.body.code) stickie.code = req.body.code;
    if (req.body.language) stickie.language = req.body.language;
    stickie.save((err, stickie) => {
      if (err) {
        console.error(`ERROR: ${err}`);
        if (err.name === "ValidationError") {
          return finalRes(res, 400, err.message)
        }
        return finalRes(res, 500, INTERNAL_ERROR_MESSAGE)
      }

      return finalRes(res, 200, "OK", stickie)
    })
  })
}

const stickiesDeleteOne = (req, res, next) => {
  if (!req.params.stickieId) {
    return finalRes(res, 400, 'Please provide stickieId')
  }
  const { stickieId } = req.params
  Stickie.findById(stickieId).exec((err, stickie) => {
    if (err) {
      if (err.name === "CastError") {
        return finalRes(res, 400, "Please provide stickieId in valid format")
      } else {
        console.error(`ERROR: ${err}`);
        return finalRes(res, 500, INTERNAL_ERROR_MESSAGE)
      }
    }

    if (!stickie) {
      return finalRes(res, 400, "stickieId not found")
    }

    stickie.remove((err, stickie) => {
      if (err) {
        console.error(`ERROR: ${err}`);
        return finalRes(res, 500, INTERNAL_ERROR_MESSAGE)
      }
      return finalRes(res, 200, "DELETE OK")
    })
  })
}

const languagesList = (req, res, next) => {
  return finalRes(res, 200, "OK", languages)
}

const editorThemesList = (req, res, next) => {
  return finalRes(res, 200, "OK", editorThemes)
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
