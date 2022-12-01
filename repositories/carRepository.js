const { Car } = require('../models');

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
}

module.exports = CarRepository;
