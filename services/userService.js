const userRepository = require('../repositories/userRepository');

class UserService {
  static async getAll() {
    try {
      const getUser = await userRepository.getAll();
      return {
        status: true,
        status_code: 200,
        message: 'Get All Car',
        data: getUser,
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: null,
      };
    }
  }

  static async deleteByID({ id }) {
    try {
      const deleteUser = await userRepository.deleteByID({ id });
      return {
        status: true,
        status_code: 200,
        message: 'Get All Car',
        data: deleteUser,
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: null,
      };
    }
  }
}

module.exports = UserService;
