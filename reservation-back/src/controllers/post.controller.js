const PostController = {
    async createPost(req, res) {
        res.send("Get All Comments")
    },
    async getPosts(req, res) {
        res.send("Get All Posts")
    },
    async getPost(req, res) {
        res.send("Get Post")
    },
    async updatePost(req, res) {
        res.send("Update Post")
    },
    async deletePost(req, res) {
        res.send("Delete Post")
    }
}

module.exports = PostController;