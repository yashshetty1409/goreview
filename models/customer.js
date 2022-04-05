const mongoose = require('mongoose');
const Activity = require('./activity');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    name: String,
    number: Number,
    addressd: String,
    password: String, 
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    activitis: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Activity'
        }
    ]
});

CustomerSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Customer.deleteMany({
            _id: {
                $in: doc.activitis
            }
        })
    }
})


module.exports = mongoose.model('Customer', CustomerSchema);