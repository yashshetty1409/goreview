const mongoose = require('mongoose');
const Customer = require('../models/customer')

mongoose.connect(process.env.MONGODB_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await Customer.deleteMany({});
    for (let i = 0; i < 3; i++) {
        const prod = new Customer({
            author: '618108487f40850236ad7760',
            name: `ankit`,
            number: '9097572249',
            address: 'alauli',
            password: 'neri',
        })
        await prod.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})