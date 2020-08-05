import axios from "axios"

export default {
    getgooglebooks:function(query) {
        return axios.get("http://www.googleapis.com/book/v1/volumes?q=" + query)
    },

    // GET ALL BOOKS
    getBooks: function() {
        return axios.get("/api/books")
    },

    // GETTING SPECIFIC TITLE
    getBook: function(id) {
        return axios.get("/api/books" + id)
    },

    // SAVING BOOKS
    saveBooks: function (saveBooks) {
        return axios.post("/api/books", saveBooks)
    },

    // DELETING BOOKS
    deleteBook: function(id) {
        return axios.delete("/api/books" + id)
    }
}