const Sequelize = require('sequelize');

const db = require('../config/database');

const Travel = db.define('travel', {
  title: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.STRING
  },
  date_start: {
    type: Sequelize.DATE
  },
  date_end: {
    type: Sequelize.DATE
  },
  image: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  available: {
    type: Sequelize.STRING
  }
});

module.exports = Travel;