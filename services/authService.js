const usersRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT } = require('../lib/const');
const SALT_ROUND = 10;

class AuthService {
  static async register({ name, email, password, role }) {
    try {
      if (!name) {
        return {
          status: false,
          status_code: 400,
          message: 'Nama wajib diisi',
          data: null,
        };
      }

      if (!role) {
        return {
          status: false,
          status_code: 400,
          message: 'Role wajib diisi',
          data: null,
        };
      }

      if (!email) {
        return {
          status: false,
          status_code: 400,
          message: 'Email wajib diisi',
          data: null,
        };
      }

      if (!password) {
        return {
          status: false,
          status_code: 400,
          message: 'Password wajib diisi',
          data: null,
        };
      } else if (password.length < 8) {
        return {
          status: false,
          status_code: 400,
          message: 'Password minimal 8 karakter',
          data: null,
        };
      }

      const getUserByEmail = await usersRepository.getByEmail({ email });

      if (getUserByEmail) {
        return {
          status: false,
          status_code: 400,
          message: 'Email sudah digunakan',
          data: null,
        };
      } else {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
        const createdUser = await usersRepository.create({
          name,
          email,
          password: hashedPassword,
          role,
        });

        return {
          status: true,
          status_code: 201,
          message: 'Berhasil mendaftarkan user',
          data: createdUser,
        };
      }
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
