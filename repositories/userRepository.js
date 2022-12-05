const { User } = require('../models');
const { deleteByID } = require('./carRepository');

class UserRepository {
  static async getByID({ id }) {
    const getUser = await User.findOne({ where: { id } });
    return getUser;
  }

  static async getByEmail({ email }) {
    const getUser = await User.findOne({ where: { email } });
    return getUser;
  }

  static async create({ name, email, password, role }) {
    const createdUser = User.create({
      name,
      email,
      password,
      role,
    });
    return createdUser;
  }

  static async getAll() {
    const getUser = await User.findAll();
    return getUser;
  }

  static async deleteByID({ id }) {
    const userDelete = await User.destroy({ where: { id } });
    return userDelete;
  }
}

module.exports = UserRepository;
