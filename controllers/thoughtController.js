const { Thought, User } = require("../models");

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    getThoughtbyId(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then ((thoughtData) => {
                if (!thoughtData) {
                    res.status(404).json({ message: "No thought found with this ID!" });
                    return;
                }
                res.json(thoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((thoughtData) => {
                return User.findOneAndUpdate(
                    { 
                        _id: req.body.userId 
                    },
                    { 
                        $push: { 
                            thoughts: thoughtData._id 
                        } 
                    },
                    { 
                        new: true 
                    }
                )
            })
            .then((userData) => {
                if (!userData) {
                    res.status(404).json({ message: "No user found with this ID!" });
                    return;
                }
                res.json(userData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { 
                _id: req.params.thoughtId 
            },
            { 
                $set: req.body 
            },
            { 
                runValidators: true,
                new: true,
            }
        )
        .then((thoughtData) => {
            if (!thoughtData) {
                res.status(404).json({ message: "No thought found wiht this"});
                return;
            }
            res.json(thoughtData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    deleteThought(req, res) {
        Thought.findOneAndRemove(
            {
                _id: req.params.thoughtId
            }
        )
        .then((thoughtData) => {
            if (!thoughtData) {
                res.status(404).json({ message: "No thought found with this ID!" });
                return;
            }
            return User.findOneAndUpdate(
                {
                    _id: req.body.userId
                },
                {
                    $pull: {
                        thoughts: req.params.thoughtId
                    }
                },
                {
                    new: true
                }
            );
        })
        .then((userData) => {
            if (!userData) {
                res.status(404).json({ message: "Thought created, but no user found with this ID!" });
                return;
            }
            res.json({ message: "Thought successfully deleted!" });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    addReaction(req, res) {
        Thought.findOneAndUpdate (
            {
                _id: req.params.thoughtId
            },
            {
                $addToSet: {
                    reactions: req.body
                }
            },
            {
                runValidators: true,
                new: true
            }
        )
        .then((thoughtData) => {
            if (!thoughtData) {
                res.status(404).json({ message: "No thought found with this ID!" });
                return;
            }
            res.json(thoughtData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            {
                _id: req.params.thoughtId
            },
            {
                $pull: {
                    reactions: {
                        reactionId: req.params.reactionId
                    }
                }
            },
            {
                runValidators: true,
                new: true
            }
        )
        .then((thoughtData) => {
            if (!thoughtData) {
                res.status(404).json({ message: "No thought found with this ID!" });
                return;
            }
            res.json(thoughtData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
};

module.exports = thoughtController;