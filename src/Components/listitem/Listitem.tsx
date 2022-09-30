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
	showContextMenu?: (e: React.MouseEvent<HTMLDivElement>, id: string) => void;
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
	showContextMenu = () => {},
}) => {
	return (
		<div className='flex items-center justify-around gap-2'>
			<input
				type='checkbox'
				className='m-3 bg-white border-1 border-lightGret'
			/>

			<div className='w-32 px-4 py-2'>{id}</div>
			<div className='w-32 px-4 py-2'>{petName}</div>
			<div className='w-32 px-4 py-2'>
				{status.split(".")[1] === "png" ? <img src={status} /> : status}
			</div>
			<div className='w-32 px-4 py-2'>{pawrent}</div>
			<div className='w-32 px-4 py-2'>{breed}</div>
			<div className='w-32 px-4 py-2'>{gender}</div>
			<div className='px-4 py-2 w-44'>{dob}</div>
			<div className='w-48 px-4 py-2'>{phone}</div>
			<div className='px-4 py-2 grow'>{address}</div>
			{id !== "ID" && (
				<div className='cursor-pointer' onClick={(e) => showContextMenu(e, id)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							stroke='#54BAB9'
							d='M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z'
						/>
					</svg>
				</div>
			)}
		</div>
	);
};

export default Listitem;
