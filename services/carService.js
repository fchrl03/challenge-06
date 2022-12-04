const carRepository = require('../repositories/carRepository');

class CarService {
  static async getAll() {
    try {
      const getCar = await carRepository.getAll();
      return {
        status: true,
        status_code: 200,
        message: 'Get All Car',
        data: getCar,
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

  static async create({ name, model, picture, rent_price, capacity, description, available, type, year, user_id, createdBy }) {
    try {
      if (!name) {
        return {
          status: false,
          status_code: 400,
          message: 'Nama mobil wajib diisi',
          data: null,
        };
      }

      if (!model) {
        return {
          status: false,
          status_code: 400,
          message: 'Model mobil wajib diisi',
          data: null,
        };
      }

      if (!picture) {
        return {
          status: false,
          status_code: 400,
          message: 'Gambar wajib diisi',
          data: null,
        };
      }

      if (!rent_price) {
        return {
          status: false,
          status_code: 400,
          message: 'Harga sewa wajib diisi',
          data: null,
        };
      }

      if (!capacity) {
        return {
          status: false,
          status_code: 400,
          message: 'Capacity wajib diisi',
          data: null,
        };
      }

      if (!description) {
        return {
          status: false,
          status_code: 400,
          message: 'Deskripsi wajib diisi',
          data: null,
        };
      }

      if (!available) {
        return {
          status: false,
          status_code: 400,
          message: 'Tersedia wajib diisi',
          data: null,
        };
      }

      if (!type) {
        return {
          status: false,
          status_code: 400,
          message: 'Tipe wajib diisi',
          data: null,
        };
      }

      if (!year) {
        return {
          status: false,
          status_code: 400,
          message: 'Tahun mobil wajib diisi',
          data: null,
        };
      }

      const createdCar = await carRepository.create({ name, model, picture, rent_price, capacity, description, available, type, year, user_id, createdBy });

      return {
        status: true,
        status_code: 201,
        message: 'Car created successfully',
        data: createdCar,
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

  static async getAllAvailable({ available }) {
    try {
      const availableCar = await carRepository.getAllAvailable({ available });
      return {
        status: true,
        status_code: 200,
        message: 'Get Car by ID successfully',
        data: availableCar,
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

  static async deleteByID({ id, deletedBy }) {
    try {
      const deletedCar = await carRepository.deleteByID({ id, deletedBy });
      return {
        status: true,
        status_code: 200,
        message: 'Car deleted successfully',
        data: deletedCar,
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

  static async getByID({ id, deletedBy }) {
    try {
      const getCar = await carRepository.getByID({ id, deletedBy });
      return {
        status: true,
        status_code: 200,
        message: 'Get ID Car successfully(if data null, so the data has been deleted)',
        data: getCar,
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

  static async updateByID({ id, name, model, picture, rent_price, capacity, description, available, type, year, updatedBy }) {
    try {
      const updatedCar = await carRepository.updateByID({ id, name, model, picture, rent_price, capacity, description, available, type, year, updatedBy });
      return {
        status: true,
        status_code: 200,
        message: 'Car updated successfully',
        data: updatedCar,
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

module.exports = CarService;
