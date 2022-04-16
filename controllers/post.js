const seedData = require("../helper/seed");
const createError = require('http-errors');
const mongoose = require('mongoose');

const Post = require("../models/posts");

module.exports = {
    getAllPosts: async (req, res, next) => {
        try {
            await Post.deleteMany({});
            await Post.insertMany(seedData);
            const results = await Post.find({}, { __v: 0 });
            // const results = await Post.find({}, { name: 1, price: 1, _id: 0 });
            // const results = await Post.find({ price: 699 }, {});
            res.send(results);
        } catch (error) {
            console.log(error.message);
        }
    },

    findPostByTerm: async (req, res, next) => {
        const term = req.params.term;

        try {
            const queryRegx = new RegExp(term, 'i');
           const result = await Post.find({
                    $or: [
                        { name: { $regex: queryRegx } },
                        { policyNo: { $regex: queryRegx } },

                    ],
                })

            // const Post = await Post.findOne({ _id: id });
            if (!result) {
                throw createError(404, 'Post does not exist.');
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);

        }
    },


};