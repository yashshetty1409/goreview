const express = require('express');
const router = express.Router();
const customers = require('../controllers/customers');
const catchAsync = require('../utils/catchAsync');
const { customerSchema } = require('../schemas.js');
const {LogInPage, isLoggedIn, isAuthor, validateCustomer } = require('../middleware');

const Customer = require('../models/customer');

router.route('/')
    .get(LogInPage, catchAsync(customers.index))
    .post( validateCustomer, catchAsync(customers.createCustomer));

router.get('/new', isLoggedIn, customers.renderNewForm);

router.route('/:id')
    .get(LogInPage, catchAsync(customers.showCustomer))
    .put(isAuthor, validateCustomer, catchAsync(customers.updateCustomer))
    .delete(isAuthor, catchAsync(customers.deleteCustomer));

router.get('/:id/edit', isAuthor, catchAsync(customers.renderEditForm));


module.exports = router;
