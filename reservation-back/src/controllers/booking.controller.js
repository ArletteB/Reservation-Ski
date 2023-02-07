const BookingController = {
    async createBooking(req, res) {
        res.send("Get All Comments")
    },
    async getBookings(req, res) {
        res.send("Get All Bookings")
    },
    async getBooking(req, res) {
        res.send("Get Booking")
    },
    async updateBooking(req, res) {
        res.send("Update Booking")
    },
    async deleteBooking(req, res) {
        res.send("Delete Booking")
    }

}
module.exports = BookingController;