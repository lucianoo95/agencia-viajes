const Testimonial = require('../models/Testimonial');

exports.showTestimonial = async (request, response) => {
  const testimonial = await Testimonial.findAll();
  response.render('testimonial', {
    page: 'Testimoniales',
    testimonial
  })
}

exports.saveTestimonial = async (request, response) => {
  // validar campos vacios
  const { name, email, message } = request.body;
  let errors = Array.from([]);

  if (!name) {
    errors.push({ message: 'Agrega tu nombre' });
  }
  if (!email) {
    errors.push({ message: 'Agrega tu nombre' });
  }
  if (!message) {
    errors.push({ message: 'Agrega tu nombre' });
  }

  if (errors.length > 0) {
    console.log(errors)
    // muestra la vista con errores
    const testimonial = await Testimonial.findAll();
    response.render('testimonial', {
      errors,
      name,
      email,
      message,
      page: 'Testimoniales',
      testimonial
    })
  } else {
    // almacenarlo en la base de datos
    const testimonial = await Testimonial.create({
      name,
      email,
      message
    })
      .then(testimonial => response.redirect('./testimonial'))
      .catch(error => console.log(error))

  }
}

