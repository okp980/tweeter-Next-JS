import { Schema, model, models, SchemaTypes } from "mongoose";

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		default: null,
	},
});

export default models.User || model("User", UserSchema);
