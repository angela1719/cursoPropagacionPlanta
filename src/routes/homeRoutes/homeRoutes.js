const express = require('express');
const controllerHome = require('../../controllers/controllerHome');
const router = express.Router();

router.get('/', controllerHome.index);
router.get('/introduccion', controllerHome.introd);


module.exports = router;
