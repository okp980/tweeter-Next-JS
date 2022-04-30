import Image from "next/image";
import { FaSortDown } from "react-icons/fa";
import { StyledDiv } from "./userprofile.style";

const UserProfile = () => {
	return (
		<StyledDiv>
			<div className="user__image">
				<Image
					src="/assets/images/profile-pic.jpg"
					layout="fill"
					alt="profile-pic"
				/>
			</div>
			<div className="user__name">john smith</div>
			<FaSortDown />
		</StyledDiv>
	);
};

export default UserProfile;
