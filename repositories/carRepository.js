const { Car } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class CarRepository {
  static async create({ name, model, picture, rent_price, capacity, description, available, type, year, user_id, createdBy }) {
    const createdCar = await Car.create({
      name,
      model,
      picture,
      rent_price,
      capacity,
      description,
      available,
      type,
      year,
      user_id,
      createdBy,
    });

    return createdCar;
  }

  static async getAllAvailable({ available }) {
    const getAllCar = await Car.findAll({ where: { available } });
    return getAllCar;
  }

  static async getByID({ id }) {
    const getCar = await Car.findOne({
      where: {
        id,
        deletedAt: {
          [Op.ne]: null,
        },
      },
    });
    return getCar;
  }

  static async deleteByID({ id, user_id }) {
    const deleteCar = await Car.update(
      {
        deletedAt: new Date().getTime(),
        deletedBy: user_id,
      },
      { where: { id } }
    );
    return deleteCar;
  }
}

module.exports = CarRepository;
