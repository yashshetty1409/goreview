const express = require('express');
const router = express.Router({mergeParams: true });
const { validateActivity, isLoggedIn, isActivityAuthor } = require('../middleware');
const Customer = require('../models/customer');
const Activity = require('../models/activity');
const activitis = require('../controllers/activitis')
const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync');


router.post('/', validateActivity, catchAsync(activitis.createActivity));

router.delete('/:activityId', isActivityAuthor, catchAsync(activitis.deleteActivity));

module.exports = router;
