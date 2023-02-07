const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    id: String,
    title: String,
    imageUrl: String,
    weight: String,
    size: String,
    style: String,
    price: String,
    description : Text,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    createdAt: Date,
    bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
    isAvailable: Boolean

  
  
})

module.exports = mongoose.model('Post', PostSchema);