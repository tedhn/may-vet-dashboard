import React, { FC } from "react";

import LogoImage from "@/resources/logo.png";
import NotificationsImage from "@/resources/notifications.png";

interface PropTypes {
	userImage: string;
}

const NavBar: FC<PropTypes> = ({ userImage }) => {
	return (
		<div className="bg-teal">
			<div className='container flex justify-between items-center text-white mx-auto px-8 py-1'>
				<img src={LogoImage} alt='logo-image' />
				<div className='flex justify-around gap-2 items-center'>
					<img src={NotificationsImage} alt='logo-image' className="mr-4"/>
					<img src={userImage} alt='user-image' />
					<div>
						<div className="font-medium">Lisa</div>
						<div className="text-xs">Operator</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
