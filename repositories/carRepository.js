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

  static async getAllAvailable({ available }) {
    const getAllCar = await Car.findAll({ where: { available } });
    return getAllCar;
  }

  static async getAll() {
    const getCar = await Car.findAll();
    return getCar;
  }

  static async getByID({ id, deletedBy }) {
    const getCar = await Car.findOne({
      where: {
        id,
        deletedBy,
      },
    });
    return getCar;
  }

  static async deleteByID({ id, deletedBy }) {
    const deleteCar = await Car.update(
      {
        deletedAt: new Date().getTime(),
        deletedBy,
      },
      { where: { id } }
    );
    return deleteCar;
  }

  static async updateByID({ id, name, model, picture, rent_price, capacity, description, available, type, year, updatedBy }) {
    const updatedCar = await Car.update(
      {
        name,
        model,
        picture,
        rent_price,
        capacity,
        description,
        available,
        type,
        year,
        updatedBy,
      },
      { where: { id } }
    );
    return updatedCar;
  }
}

module.exports = CarRepository;
