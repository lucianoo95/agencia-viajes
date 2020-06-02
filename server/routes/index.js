// Importar funcion Router de express
const router = require('express').Router();
// Controladores
const usController = require('../controllers/usController');
const homeController = require('../controllers/homeController');
const travelsController = require('../controllers/travelsController');
const testimonialController = require('../controllers/testimonialController');
// Rutas
router.get('/', homeController.querysHomePage);
router.get('/us', usController.infoUs);
router.get('/travels', travelsController.getTravels);
router.get('/travels/:id', travelsController.findTravel);
router.get('/testimonial', testimonialController.showTestimonial);
// Cuando se envia un formulario
router.post('/testimonial', testimonialController.saveTestimonial);

module.exports = router;