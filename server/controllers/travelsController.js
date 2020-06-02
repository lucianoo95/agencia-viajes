const Travel = require('../models/Travel');

exports.getTravels = async (request, response) => {
  const travels = await Travel.findAll();
  response.render('travels', {
    page: 'Próximos viajes',
    travels
  })
}

exports.findTravel = async (request, response) => {
  const travel = Travel.findByPk(request.params.id);
  response.render('travel', {
    travel
  })
}
