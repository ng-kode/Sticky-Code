var express = require('express');
var router = express.Router();
const ctrlStickie = require('../controllers/stickies');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    status: 'success',
    welcome: 'to stickyCode'
  });
});

router.get('/stickies', ctrlStickie.stickiesList);
router.post('/stickies', ctrlStickie.stickiesCreate);
router.get('/stickies/:stickieId', ctrlStickie.stickiesReadOne);
router.put('/stickies/:stickieId', ctrlStickie.stickiesUpdateOne);
router.delete('/stickies/:stickieId', ctrlStickie.stickiesDeleteOne);

router.get('/languages', ctrlStickie.languagesList);
router.get('/editorThemes', ctrlStickie.editorThemesList);

module.exports = router;