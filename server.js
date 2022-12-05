const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const upload = require('./helpers/fileUploadCloudinary');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// SWAGGER
const swaggerOptions = require('./utils/swaggerOptions');
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Import Controllers
const authController = require('./controllers/authController.js');
const carController = require('./controllers/carController');
const userController = require('./controllers/userController');

// Import Middlewares
const middleware = require('./middlewares/auth');

// Auth
app.post('/register', authController.register);
app.post('/login', authController.login);
app.post('/auth/admin', middleware.authenticate, middleware.isSuperAdmin, authController.registerAdmin);
app.get('/auth/me', middleware.authenticate, authController.currentUser);

// Users
app.get('/users', middleware.authenticate, middleware.isSuperAdmin, userController.getAll);
app.delete('/users/:id', middleware.authenticate, middleware.isSuperAdmin, userController.deleteByID);

// Cars
app.post('/cars', upload.single('picture'), middleware.authenticate, middleware.isTwoAdmin, carController.create);
app.get('/cars/ready', carController.getAvailableCar);
app.delete('/cars/:id', middleware.authenticate, middleware.isTwoAdmin, carController.deleteByID);
app.get('/cars', middleware.authenticate, middleware.isTwoAdmin, carController.getAll);
app.get('/cars/:id', middleware.authenticate, middleware.isTwoAdmin, carController.getByID);
app.put('/cars/:id', middleware.authenticate, middleware.isTwoAdmin, upload.single('picture'), carController.updateByID);

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running in port http://localhost:${process.env.PORT || 8000}`);
});
