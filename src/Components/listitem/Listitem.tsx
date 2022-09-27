import React, { FC } from "react";

interface PropTypes {
	id: string;
	petName: string;
	status: string;
	pawrent: string;
	breed: string;
	gender: string;
	dob: string;
	phone: string;
	address: string;
}

const Listitem: FC<PropTypes> = ({
	id,
	petName,
	status,
	pawrent,
	breed,
	gender,
	dob,
	phone,
	address,
}) => {
	return (
		<div className='flex items-center justify-around gap-2'>
			<input type='checkbox' className='m-3 bg-white border-1 border-lightGret' />

			<div className='w-32 px-4 py-2'>{id}</div>
			<div className='w-32 px-4 py-2'>{petName}</div>
			<div className='w-32 px-4 py-2'>{status}</div>
			<div className='w-32 px-4 py-2'>{pawrent}</div>
			<div className='w-32 px-4 py-2'>{breed}</div>
			<div className='w-32 px-4 py-2'>{gender}</div>
			<div className='px-4 py-2 w-44'>{dob}</div>
			<div className='w-48 px-4 py-2'>{phone}</div>
			<div className='px-4 py-2 grow'>{address}</div>
		</div>
	);
};

export default Listitem;
