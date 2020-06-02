const Travel = require('../models/Travel');
const Testimonial = require('../models/Testimonial');

exports.querysHomePage = async (request, response) => {
  const travels = await Travel.findAll({ limit: 3 });
  const testimonials = Testimonial.findAll({ limit: 3 });

  response.render('index', {
    page: 'Próximos viajes',
    className: 'home',
    travels,
    testimonials
  })
}