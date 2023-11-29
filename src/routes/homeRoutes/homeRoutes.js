const express = require('express');
const controllerHome = require('../../controllers/controllerHome');
const router = express.Router();

router.get('/', controllerHome.index);
router.get('/introduccion', controllerHome.introd);
router.get('/objetivos', controllerHome.objetivos);
router.get('/objetivosE', controllerHome.objetivosE);
router.get('/unidadUno', controllerHome.unidad1);
router.get('/diaOcho', controllerHome.diap8);
router.get('/diaNueve', controllerHome.diap9);
router.get('/diaDiez', controllerHome.diap10);
router.get('/diaOnce', controllerHome.diap11);
router.get('/diaDoce', controllerHome.diap12);
router.get('/diaTrece', controllerHome.diap13);
router.get('/diaCatorce', controllerHome.diap14);
router.get('/apareamiento', controllerHome.aparea);
router.get('/rompecabezas', controllerHome.rompecabeza);

module.exports = router;
