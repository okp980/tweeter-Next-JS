import { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import dbConnect from "../../../lib/db";
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
				const tweets = await Tweet.find({});
				res.status(200).json({ success: true, data: tweets });
			} catch (error) {
				console.log(error);
				res.status(500).json({ success: false, message: "Server Error" });
			}
			break;
		case "POST":
			try {
				const tweet = await Tweet.create(req.body);
				res.status(201).json({ success: true, data: tweet });
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
