import { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import dbConnect from "../../../lib/db";
import Comment from "../../../model/Comment";
import Tweet from "../../../model/Tweet";

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
				const comments = await Comment.find({});
				res
					.status(200)
					.json({ success: true, count: comments.length, data: comments });
			} catch (error) {
				console.log(error);
				res.status(500).json({ success: false, message: "Server Error" });
			}
			break;
		case "POST":
			try {
				const comment = await Comment.create(req.body);
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
