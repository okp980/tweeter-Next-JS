import Image from "next/image";

const UserProfile = () => {
	return (
		<div>
			<Image
				src="/assets/images/profile-pic.jpg"
				width="36"
				height="36"
				alt="profile pic"
			/>
		</div>
	);
};

export default UserProfile;
