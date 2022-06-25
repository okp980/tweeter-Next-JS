import { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import dbConnect from "../../../../lib/db";
import Comment from "../../../../model/Comment";
import Tweet from "../../../../model/Tweet";

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
				const comment = await Comment.findById(req.query.id);
				if (!comment) {
					return res.status(404).json({
						success: false,
						message: "No comment was found with this ID",
					});
				}
				res.status(200).json({ success: true, data: comment });
			} catch (error) {
				console.log(error);

				res.status(500).json({ success: false, message: "Server Error" });
			}
			break;
		case "PUT":
			try {
				let comment = await Comment.findById(req.query.id);
				if (!comment) {
					return res.status(404).json({
						success: false,
						message: "No tweet was found with this ID",
					});
				}
				comment = await Comment.findByIdAndUpdate(req.query.id, req.body, {
					new: true,
					runValidators: true,
				});
				res.status(200).json({ success: true, data: comment });
			} catch (error) {
				console.log(error);

				res.status(500).json({ success: false, message: "Server Error" });
			}
			break;
		case "DELETE":
			try {
				let comment = await Comment.findById(req.query.id);
				if (!comment) {
					return res.status(404).json({
						success: false,
						message: "No tweet was found with this ID",
					});
				}
				await comment.remove();
				res
					.status(200)
					.json({ success: true, message: "deleted successfuly", data: {} });
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
