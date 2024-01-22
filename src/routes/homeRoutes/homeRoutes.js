const express = require('express');
const controllerHome = require('../../controllers/controllerHome');
const router = express.Router();

router.get('/', controllerHome.index);
router.get('/introduccion', controllerHome.introd);
router.get('/objetivos', controllerHome.objetivos);
router.get('/flipCard', controllerHome.flipCard);
router.get('/sliders', controllerHome.slider);
router.get('/diaOcho', controllerHome.diap8);
router.get('/diaNueve', controllerHome.diap9);
router.get('/diaDiez', controllerHome.diap10);
router.get('/diaOnce', controllerHome.diap11);
router.get('/popup', controllerHome.popup);
router.get('/diaTrece', controllerHome.diap13);
router.get('/diaCatorce', controllerHome.diap14);
router.get('/apareamiento', controllerHome.aparea);
router.get('/rompecabezas', controllerHome.rompecabeza);
router.get('/dragandDrop', controllerHome.dragandDrop);
router.get('/dragandDropSelectivo', controllerHome.dragandDropS);

module.exports = router;
