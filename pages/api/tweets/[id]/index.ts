import { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import dbConnect from "../../../../lib/db";
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
				const tweet = await Tweet.findById(req.query.id);
				if (!tweet) {
					return res.status(404).json({
						success: false,
						message: "No tweet was found with this ID",
					});
				}
				res.status(200).json({ success: true, data: tweet });
			} catch (error) {
				console.log(error);

				res.status(500).json({ success: false, message: "Server Error" });
			}
			break;
		case "PUT":
			try {
				let tweet = await Tweet.findById(req.query.id);
				if (!tweet) {
					return res.status(404).json({
						success: false,
						message: "No tweet was found with this ID",
					});
				}
				tweet = await Tweet.findByIdAndUpdate(req.query.id, req.body, {
					new: true,
					runValidators: true,
				});
				res.status(200).json({ success: true, data: tweet });
			} catch (error) {
				console.log(error);

				res.status(500).json({ success: false, message: "Server Error" });
			}
			break;
		case "DELETE":
			try {
				let tweet = await Tweet.findById(req.query.id);
				if (!tweet) {
					return res.status(404).json({
						success: false,
						message: "No tweet was found with this ID",
					});
				}
				await tweet.remove();
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
