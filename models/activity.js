const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    subuser: {
        type: String,
        required: true
    },
    items: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    given: {
        type: Number,
        required: true
    },
    remaining: {
        type: Number,
        required: true
    },
    remarks: {
        type: String,
        required: true
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model("Activity", activitySchema);