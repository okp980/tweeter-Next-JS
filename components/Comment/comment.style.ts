import styled from "styled-components";

export const CommentStyle = styled.li`
	display: flex;
	padding: 0.5em 0;
`;
export const Message = styled.div`
	margin-left: 1em;
	background: #fafafa;
	border-radius: 8px;
	padding: 0.5em;
`;
export const Head = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5em 0;
	h4 {
		font-family: Poppins;
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 21px;
		letter-spacing: -0.035em;
		color: #000000;
	}

	span {
		font-family: Noto Sans;
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 16px;
		letter-spacing: -0.035em;
		margin-left: 1em;
		color: #bdbdbd;
	}
`;
export const Body = styled.div`
	p {
		font-family: Noto Sans;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 22px;
		letter-spacing: -0.035em;
		color: #4f4f4f;
	}
	.comment-controls {
		display: flex;
		align-items: center;
		font-family: Noto Sans;
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		line-height: 16px;
		/* identical to box height */

		letter-spacing: -0.035em;

		/* Gray 4 */

		color: #bdbdbd;
	}
`;
