import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
// @ts-ignore
import dbConnect from "../../../../../../lib/db";
import Comment from "../../../../../../model/Comment";
import Tweet from "../../../../../../model/Tweet";

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
				// check if tweet exists
				const tweet = await Tweet.findById(req.query.id);
				if (!tweet) {
					return res.status(404).json({
						success: true,
						message: "No tweet was found with this ID",
					});
				}
				// check for comment
				const comment = await Comment.findById(req.query.cid);
				if (!comment) {
					return res.status(404).json({
						success: false,
						message: "No comment was found with this ID",
					});
				}
				res.status(200).json({
					success: true,
					data: comment,
				});
			} catch (error) {
				console.log(error);
				res.status(500).json({ success: false, message: "Server Error" });
			}
			break;
		case "DELETE":
			try {
				const tweet = await Tweet.findById(req.query.id).populate("comments");
				if (!tweet) {
					return res.status(404).json({
						success: false,
						message: "No tweet with this ID was found",
					});
				}
				const comment = await Comment.findById(req.query.cid);
				if (!comment) {
					return res.status(404).json({
						success: false,
						message: "No comment was found with this ID",
					});
				}
				const session = await mongoose.startSession();
				session.startTransaction();
				await tweet.comments.pull(comment);
				await tweet.comments.save({ session });
				await comment.remove({ session });
				session.commitTransaction();
				res
					.status(200)
					.json({ success: true, data: {}, message: "deleted successfully" });
			} catch (error) {
				console.log(error);
				res.status(500).json({ success: false, message: "Server Error" });
			}
			break;
		case "PUT":
			let comment;
			try {
				const tweet = await Tweet.findById(req.query.id);
				if (!tweet) {
					return res.status(404).json({
						success: false,
						message: "No tweet with this ID was found",
					});
				}
				comment = await Comment.findById(req.query.cid);
				if (!comment) {
					return res.status(404).json({
						success: true,
						message: "No comment was found with this ID",
					});
				}
				comment = await Comment.findByIdAndUpdate(req.query.cid, req.body, {
					new: true,
					runValidators: true,
				});

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
