import React, { FC} from "react";

import Delete from "@/resources/delete.png";
import Edit from "@/resources/edit.png";

interface PropTypes {
	x: number;
	y: number;
	showUpdateForm: any;
	id: string;
	showConfirmBox: () => void;
}

const Contextmenu: FC<PropTypes> = ({
	x,
	y,
	showUpdateForm,
	id,
	showConfirmBox,
}) => {
	return (
		<div
			className='absolute py-2 bg-white rounded-lg shadow-lg w-44'
			style={{ top: y, right: x }}>
			<div
				className='flex items-center justify-start gap-2 px-4 cursor-pointer hover:bg-lightGrey'
				onClick={() => showUpdateForm(id)}>
				<img src={Edit} alt='edit-image' />
				<div>Edit</div>
			</div>
			<div
				className='flex items-center justify-start gap-2 px-4 cursor-pointer hover:bg-lightGrey'
				onClick={showConfirmBox}>
				<img src={Delete} alt='delete-image' />
				<div>Delete</div>
			</div>
		</div>
	);
};

export default Contextmenu;
