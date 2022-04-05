const Joi = require('joi');

module.exports.customerSchema = Joi.object({
    customer: Joi.object({
        name: Joi.string().required(),
        number: Joi.number().required(),
        address: Joi.string().required(),
        password: Joi.string().required(),
    }).required()
});

module.exports.activitySchema = Joi.object({
    activity: Joi.object({
        date: Joi.string().required(),
        subuser: Joi.string().required(),
        items: Joi.string().required(),
        total: Joi.string().required(),
        given: Joi.string().required(),
        remaining: Joi.string().required(),
    }).required()
})