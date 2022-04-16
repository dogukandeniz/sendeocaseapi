const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
    phone: {
        type: String,
        required: true,

    },
    email   : {
        type: String,
        required: true,

    },
    policyNo: {
        type: String,
        required: true,

    },

},{
    timestamps: true
});

const Post = mongoose.model('post', PostSchema);


module.exports = Post;