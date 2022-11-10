const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (dateCreated) => moment(dateCreated).format("MMM Do YYYY, h:mm:ss a")
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (dateCreated) => moment(dateCreated).format("MMM Do YYY, h:mm:ss a")
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

const Thought = model("Thought", thoughtSchema);

thoughtSchema.virtual("reactionCount").get(function() {
    return this.reactions.length;
});

module.exports = Thought;