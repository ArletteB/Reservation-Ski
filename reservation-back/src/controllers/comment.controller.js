const CommentController = {
    async createComment(req, res) {
        res.send("Get All Comments")
    },
    async getComments(req, res) {
        res.send("Get All Comments")
    },
    async getComment(req, res) {
        res.send("Get Comment")
    },
    async updateComment(req, res) {
        res.send("Update Comment")
    },
    async deleteComment(req, res) {
        res.send("Delete Comment")
    }
}

module.exports = CommentController;