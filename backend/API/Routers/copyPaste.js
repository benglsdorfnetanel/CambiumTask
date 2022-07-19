const express = require('express');
const router = express.Router();
const copypaste = require('../Controllers/copyPaste')

router.post('',copypaste.post);
router.get('/:id',copypaste.get);


module.exports = router;