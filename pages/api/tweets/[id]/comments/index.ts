import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
// @ts-ignore
import dbConnect from "../../../../../lib/db";
import Comment from "../../../../../model/Comment";
import Tweet from "../../../../../model/Tweet";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req;
	// @ts-ignore
	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const tweet = await Tweet.findById(req.query.id).populate("comments");
				if (!tweet) {
					return res.status(404).json({
						success: false,
						message: "No tweet was found with this ID",
					});
				}
				res.status(200).json({
					success: true,
					count: tweet.comments?.length,
					data: tweet.comments,
				});
			} catch (error) {
				console.log(error);
				res.status(500).json({ success: false, message: "Server Error" });
			}
			break;
		case "POST":
			req.body.tweet = req.query.id;
			try {
				const tweet = await Tweet.findById(req.query.id);
				if (!tweet) {
					return res.status(404).json({
						success: false,
						message: "No tweet with this ID was found",
					});
				}
				const comment = await new Comment(req.body);
				const session = await mongoose.startSession();
				session.startTransaction();
				await tweet.comments.push(comment);
				await tweet.save({ session });
				await comment.save({ session });
				session.commitTransaction();
				res.status(201).json({ success: true, data: comment });
			} catch (error) {
				console.log(error);
				res.status(500).json({ success: false, message: "Server Error" });
			}
			break;

		default:
			res.status(400).json({ success: false, message: "Not Allowed" });
			break;
	}
}
