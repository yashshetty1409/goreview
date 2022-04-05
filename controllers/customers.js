const Customer = require('../models/customer');

module.exports.index = async (req, res) => {
    const customers = await Customer.find({});
    res.render('customers/index', { customers })
}

module.exports.renderNewForm =  (req, res) => {
    res.render('customers/new');
}

module.exports.createCustomer =  async (req, res, next) => {
    const customer = new Customer(req.body.customer);
    customer.author = req.user._id;
    await customer.save();
    req.flash('success', 'Successfully made a new customer!');
    res.redirect(`/customers/${Customer._id}`)
}

module.exports.showCustomer =  async (req, res,) => {
    const customer = await Customer.findById(req.params.id).populate({
        path: 'activitis',
        populate: {
            path: 'author'
        }
    }).populate('author');
    if (!customer) {
        req.flash('error', 'Cannot find that customer!');
        return res.redirect('/customers');
    }
    res.render('customers/show', {customer});
}

module.exports.renderEditForm =  async (req, res) => {
    const customer = await Customer.findById(req.params.id)
    if (!customer) {
        req.flash('error', 'Cannot find that customer!');
        return res.redirect('/customer');
    }
    res.render('customers/edit', { customer });
}

module.exports.updateCustomer =  async (req, res) => {
    const { id } = req.params;
    const customer = await Customer.findByIdAndUpdate(id, { ...req.body.customer });
    req.flash('success', 'Successfully updated customer!');
    res.redirect(`/customers/${customer._id}`)
}

module.exports.deleteCustomer =  async (req, res) => {
    const { id } = req.params;
    await Customer.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted customer!');
    res.redirect('/customers');
}