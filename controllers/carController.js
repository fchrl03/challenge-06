const carService = require('../services/carService');
const cloudinary = require('../config/cloudinary');

const create = (req, res) => {
  const fileToUpload = req.file;
  const { name, model, rent_price, capacity, description, available, type, year } = req.body;
  const createdBy = req.user.name;
  const user_id = req.user.id;

  const fileBase64 = fileToUpload.buffer.toString('base64');
  const file = `data:${fileToUpload.mimetype};base64,${fileBase64}`;
  cloudinary.uploader.upload(file, async (err, result) => {
    if (err) {
      res.status(400).send(`Gagal mengupload file ke cloudinary: ${err.message}`);

      return;
    }
    const { status, status_code, message, data } = await carService.create({
      name,
      model,
      picture: result.url,
      rent_price,
      capacity,
      description,
      available,
      type,
      year,
      createdBy,
      user_id,
    });

    res.status(status_code).send({
      status: status,
      message: message,
      data: data,
    });
  });
};

module.exports = { create };
