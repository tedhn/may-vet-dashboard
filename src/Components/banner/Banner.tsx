import React, { FC, useEffect, useState } from "react";

import SearchImage from "@/resources/search.png";
import AddImage from "@/resources/add.png";
import { DropDown } from "@/Components";
import { BREED_OPTIONS, ROW_OPTIONS, STATUS_OPTIONS } from "@/constants";

interface PropTypes {
	showForm: () => void;
	filter: {
		status: string;
		breed: string;
		row: string;
	};
	setFilter: React.Dispatch<
		React.SetStateAction<{
			status: string;
			breed: string;
			row: string;
		}>
	>;
}

const Banner: FC<PropTypes> = ({ showForm, filter, setFilter }) => {
	return (
		<div className='flex items-end justify-between pt-4'>
			<div className='w-72'>
				<div className='text-xl font-semibold text-teal'>Patient List</div>
				<div className='relative w-full px-2 py-1 mt-4 text-sm border-2 rounded-lg border-lightGrey text-lightGrey'>
					<input
						type='text'
						placeholder='Search table'
						className='w-full bg-transparent placeholder:text-lightGrey focus:outline-0'
					/>
					<img
						src={SearchImage}
						alt='search-image'
						className='absolute -translate-y-1/2 pointer-events-none top-1/2 right-2'
					/>
				</div>
				<div className='flex justify-between w-full gap-2 my-4'>
					<DropDown
						dropDownName='status'
						updateFormData={setFilter}
						formData={filter}
						label={filter.status}
						options={STATUS_OPTIONS.map((status) => status.name)}
					/>
					<DropDown
						dropDownName='breed'
						updateFormData={setFilter}
						formData={filter}
						label={filter.breed}
						options={BREED_OPTIONS}
					/>
				</div>
			</div>
			<div className='w-48 '>
				<div
					onClick={showForm}
					className='flex items-center justify-center w-full gap-2 px-4 py-2 text-sm text-center text-white rounded-lg bg-teal cursor-pointer'>
					<img src={AddImage} alt='Add-image' className='w-3 h-3' />
					<div>Add new Patient</div>
				</div>
				<div className='flex justify-start w-full gap-2 my-4'>
					<div className='text-center grow'>Rows per page :</div>
					<DropDown
						dropDownName='row'
						updateFormData={setFilter}
						formData={filter}
						label={filter.row !== "" ? filter.row : "10"}
						options={ROW_OPTIONS}
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
