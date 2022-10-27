const mongoose =require('mongoose');

const PostsModel = mongoose.model(
    'JDO-copilot',
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    'users'
);

module.exports = { PostsModel };