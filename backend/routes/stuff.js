const express =  require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/', auth, stuffCtrl.getAllThings);
router.post('/', auth, multer,stuffCtrl.createThing);
router.put('/:id', auth, multer,stuffCtrl.modifyThing);
router.get('/:id', auth, stuffCtrl.findOneThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);


module.exports = router;
