const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/booking.controller');

router.get('/', BookingController.getBookings);
router.post('/', BookingController.createBooking);
router.get('/:id', BookingController.getBooking);
router.put('/:id', BookingController.updateBooking);
router.delete('/:id', BookingController.deleteBooking);

module.exports = router;