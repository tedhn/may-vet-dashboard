import React, { FC, useState } from "react";
import { InputBox, DropDown } from "@/Components";
import {
	BREED_OPTIONS,
	CITY_OPTIONS,
	STATUS_OPTIONS,
	TOWNSHIPS_OPTIONS,
} from "@/constants";
import { formDataType } from "@/types";

interface PropTypes {
	title: string;
	subtitle: string;
	buttonPrimary: string;
	closeForm: () => void;
	updateList: (newPatient: any, type: string) => void;
	patient?: any;
}

const Form: FC<PropTypes> = ({
	title,
	subtitle,
	buttonPrimary,
	closeForm,
	updateList,
	patient = {
		petName: "",
		status: "",
		pawrent: "",
		breed: "",
		gender: "",
		dob: "",
		phone: "",
		address: "",
	},
}) => {
	const [formData, setFormData] = useState<formDataType>(patient);

	return (
		<div className='relative w-5/12 px-2 py-8 text-center -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2'>
			<div className='text-lg font-medium text-teal'>{title}</div>
			<div className='text-sm '>{subtitle}</div>

			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-6 h-6 absolute top-4 right-4 cursor-pointer'
				onClick={closeForm}>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M6 18L18 6M6 6l12 12'
				/>
			</svg>

			<form className='grid grid-cols-2 my-8'>
				<div className='w-3/4 mx-auto my-2 text-start'>
					<div>Pet Name</div>
					<InputBox
						data={patient.petName}
						formData={formData}
						updateForm={setFormData}
						type='text'
						label='petName'
					/>
				</div>
				<div className='w-3/4 mx-auto my-2 text-start'>
					<div>Status</div>
					<DropDown
						updateFormData={setFormData}
						formData={formData}
						dropDownName='status'
						label={
							formData.status !== ""
								? formData.status
								: "Please choose a status"
						}
						options={STATUS_OPTIONS.map((status) => status.name)}
					/>
				</div>
				<div className='w-3/4 mx-auto my-2 text-start'>
					<div>Pawrent</div>
					<InputBox
						data={patient.pawrent}
						formData={formData}
						updateForm={setFormData}
						type='text'
						label='pawrent'
					/>
				</div>
				<div className='w-3/4 mx-auto my-2 text-start'>
					<div>Breed</div>
					<DropDown
						updateFormData={setFormData}
						formData={formData}
						dropDownName='breed'
						label={
							formData.breed !== "" ? formData.breed : "Please choose a breed"
						}
						options={BREED_OPTIONS}
					/>
				</div>
				<div className='w-3/4 mx-auto my-2 text-start'>
					<div>Gender</div>
					<div className='flex justify-around'>
						<InputBox
							data={patient.gender}
							formData={formData}
							updateForm={setFormData}
							type='radio'
							label='gender|Male'
						/>
						<InputBox
							data={patient.gender}
							formData={formData}
							updateForm={setFormData}
							type='radio'
							label='gender|Female'
						/>
					</div>
				</div>
				<div className='w-3/4 mx-auto my-2 text-start'>
					<div>Date of Birth</div>
					<InputBox
						data={patient.dob}
						formData={formData}
						updateForm={setFormData}
						type='text'
						label='dob'
					/>
				</div>
				<div className='w-3/4 mx-auto my-2 text-start'>
					<div>Contact Phone No.</div>
					<InputBox
						data={patient.phone}
						formData={formData}
						updateForm={setFormData}
						type='text'
						label='phone'
					/>
				</div>
				<div className='w-3/4 mx-auto my-2 text-start'>
					<div>Address</div>
					<InputBox
						data={patient.address}
						formData={formData}
						updateForm={setFormData}
						type='text'
						label='address'
					/>
				</div>
				<div className='w-3/4 mx-auto my-2 text-start'>
					<div>City</div>
					<DropDown
						updateFormData={setFormData}
						formData={formData}
						dropDownName='city'
						label={
							formData.city !== undefined
								? formData.city
								: "Please choose a city"
						}
						options={CITY_OPTIONS}
					/>
				</div>
				<div className='w-3/4 mx-auto my-2 text-start'>
					<div>Township</div>
					<DropDown
						updateFormData={setFormData}
						formData={formData}
						dropDownName='township'
						label={
							formData.township !== undefined
								? formData.township
								: "Please choose a township"
						}
						options={TOWNSHIPS_OPTIONS}
					/>
				</div>
			</form>

			<div className='flex items-center justify-center gap-4'>
				<button
					className='px-6 py-2 text-white  w-44 rounded-md'
					style={
						buttonPrimary === "Save"
							? { backgroundColor: "#54BAB9", color: "#ffffff" }
							: { backgroundColor: "#EDC339", color: "#000000" }
					}
					onClick={() => {
						if (buttonPrimary === "Save") {
							updateList(formData, "Save");
						} else {
							updateList(formData, "Update");
						}
					}}>
					{buttonPrimary}
				</button>
				<button
					onClick={closeForm}
					className='px-6 py-1 border-2  w-44 text-lightGrey rounded-md'>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default Form;
