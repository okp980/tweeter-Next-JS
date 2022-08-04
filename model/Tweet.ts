import { Schema, model, models, SchemaTypes } from "mongoose";

const TweetSchema = new Schema({
	createdBy: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	desc: {
		type: String,
		required: [true, "please enter a tweet"],
		maxlength: [100, "Tweet cannot be more than 100 characters"],
	},
	createdAt: {
		required: true,
		type: Date,
		default: Date.now,
	},
	likes: [{ type: SchemaTypes.ObjectId, ref: "User" }],
	comments: [
		{
			type: SchemaTypes.ObjectId,
			ref: "Comment",
		},
	],
	saves: [{ type: SchemaTypes.ObjectId, ref: "User" }],
	retweet: [{ type: SchemaTypes.ObjectId, ref: "User" }],
});

TweetSchema.pre("save", function (next) {
	// do stuff

	next();
});

export default models.Tweet || model("Tweet", TweetSchema);
