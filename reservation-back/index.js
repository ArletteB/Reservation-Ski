const express = require('express');
const app = express();
require('dotenv').config();
const connectMongo = require('./config/mongo.connect');
const postRouter = require('./src/routers/post.router');
const commentRouter = require('./src/routers/comment.router');
const bookingRouter = require('./src/routers/booking.router');
// const cors = require('cors');

const PORT = process.env.PORT || 8000;

connectMongo();


// app.use(cors());
app.use(express.json());

app.use('/posts', postRouter);
app.use('/comments', commentRouter);
app.use('/bookings', bookingRouter);








app.listen(PORT, () =>{
    console.log(`Listening at http://localhost: ${PORT}`)
});