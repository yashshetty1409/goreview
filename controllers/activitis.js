const Customer = require('../models/customer');
const Activity = require('../models/activity');

module.exports.createActivity = async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    const activity = new Activity(req.body.activity);
    activity.author = req.user._id;
    customer.activitis.push(activity);
    await activity.save();
    await customer.save();
    req.flash('success', 'Created new activity!');
    res.redirect(`/customers/${customer._id}`);
}

module.exports.deleteActivity = async (req, res) => {
    const { id, activityId } = req.params;
    await Customer.findByIdAndUpdate(id, { $pull: { activitis: activityId } });
    await Activity.findByIdAndDelete(activityId);
    req.flash('success', 'Successfully deleted activity')
    res.redirect(`/customers/${id}`);
}