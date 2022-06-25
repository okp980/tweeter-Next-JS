import { Schema, model, models, SchemaTypes } from "mongoose";

const CommentSchema = new Schema({
	desc: {
		type: String,
		required: [true, "please enter a comment"],
		maxlength: [100, "comment cannot be more than 100 characters"],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	user: {
		type: SchemaTypes.ObjectId,
		ref: "User",
		required: true,
	},
	likes: [{ type: SchemaTypes.ObjectId, ref: "User" }],
	tweet: {
		type: SchemaTypes.ObjectId,
		ref: "Tweet",
		required: true,
	},
});

export default models.Comment || model("Comment", CommentSchema);
