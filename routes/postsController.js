const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { PostsModel } = require('../models/postsModels');

router.get('/', (req, res) => {
    PostsModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error retrieving posts: ' + err);
    })
});

router.post('/', (req, res) => {
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message
    });

    newRecord.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error creating new post: ' + err);
    });
});

router.put('/:id', (req, res) => { //update
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id: ' + req.params.id);
    
        const updateRecord = {
            author: req.body.author,
            message: req.body.message
        };

        PostsModel.findByIdAndUpdate(
            req.params.id,
            { $set: updateRecord },
            { new: true },
            (err, docs) => {
                if (!err) res.send(docs);
                else console.log('Error updating post: ' + err);
            }
        );
});

router.delete('/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id: ' + req.params.id);
    
    PostsModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log('Error deleting post: ' + err);
        }
    );
});

module.exports = router;