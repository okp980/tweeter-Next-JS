import styled from "styled-components";

export const TweetStyle = styled.li`
	.retweet {
		display: flex;
		align-items: center;
		font-family: Noto Sans;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 19px;
		/* identical to box height */

		letter-spacing: -0.035em;

		/* Gray 3 */

		color: #828282;
		text-transform: capitalize;
		padding: 0.5em;

		svg {
			margin-right: 0.5em;
		}
	}
	.tweet-card {
		padding: 1em;
	}
`;
