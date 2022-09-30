import React, { FC, useEffect, useRef, useState } from "react";

import Delete from "@/resources/delete.png";
import Edit from "@/resources/edit.png";

interface PropTypes {
	x: number;
	y: number;
	showUpdateForm: any;
	updateList: any;
	id: string;
}

const Contextmenu: FC<PropTypes> = ({
	x,
	y,
	showUpdateForm,
	id,
	updateList,
}) => {
	return (
		<div
			className='shadow-lg bg-white  py-2 absolute w-44 rounded-lg'
			style={{ top: y, right: x }}>
			<div
				className='flex justify-start items-center gap-2 hover:bg-lightGrey cursor-pointer px-4'
				onClick={() => showUpdateForm(id)}>
				<img src={Edit} alt='edit-image' />
				<div>Edit</div>
			</div>
			<div
				className='flex justify-start items-center gap-2 hover:bg-lightGrey cursor-pointer px-4'
				onClick={() => updateList({ id }, "Delete")}>
				<img src={Delete} alt='delete-image' />
				<div>Delete</div>
			</div>
		</div>
	);
};

export default Contextmenu;
