const express = require('express');
const bodyParser = require('body-parser');
const upload = require('./helpers/fileUploadCloudinary');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Import Controllers
const authController = require('./controllers/authController.js');
const carController = require('./controllers/carController');

// Import Middlewares
const middleware = require('./middlewares/auth');

// Auth
app.post('/auth/register', authController.register);
app.post('/auth/login', authController.login);
app.get('/auth/me', middleware.authenticate, authController.currentUser);

// Cars
app.post('/cars', upload.single('picture'), middleware.authenticate, middleware.isTwoAdmin, carController.create);
app.get('/cars/ready', carController.getAvailableCar);

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running in port http://localhost:${process.env.PORT || 8000}`);
});
