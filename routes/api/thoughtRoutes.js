const router = require("express").Router;

const {
    getAllThoughts,
    getThoughtbyId,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getAllThoughts).post(createThought);

router
    .route("/:id")
    .get(getThoughtbyId)
    .put(updateThought)
    .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;