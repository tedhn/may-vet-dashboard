import React, { FC } from "react";
import Success from "@/resources/success.png";
import Close from '@/resources/close.png'

interface PropTypes {
	text: string;
	showNotif: boolean;
}

const Notification: FC<PropTypes> = ({ text, showNotif }) => {
	return (
		<div
			className='absolute bottom-4 left-4 bg-green text-white px-4 py-2 items-center justify-start'
			style={showNotif ? { display: "flex" } : { display: "hidden" }}>
			<div>
				<img src={Success} alt='success-image' className='w-4 ' />
			</div>
			<div className="mx-4"> {text}</div>
			<div>
				<img src={Close} alt='close-image' className='w-3 ' />
			</div>
		</div>
	);
};

export default Notification;
