const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookingSchema = new Schema({
    id: String,
    phoneNumber: String,
    creatAt: Date,
    post: { type: Schema.Types.ObjectId, ref: 'Post' }
})

module.exports = mongoose.model('Booking', BookingSchema);