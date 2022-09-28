import React, { useEffect, useState } from "react";
import InputBox from "../inputbox/InputBox";
import DropDown from "../dropdown/Dropdown";

const options = ["a", "b", "c", "d", "e"];

interface formDataType {
	petName: string;
	status: string;
	pawrent: string;
	breed: string;
	gender: string;
	dob: string;
	phone: string;
	address: string;
	city: string;
	township: string;
}

const Form = () => {
	const [formData, setFormData] = useState<formDataType>({
		petName: "",
		status: "",
		pawrent: "",
		breed: "",
		gender: "",
		dob: "",
		phone: "",
		address: "",
		city: "",
		township: "",
	});

	useEffect(() => {
		console.log(formData);
	}, [formData]);

	return (
		<div className='max-w-2xl px-2 py-8 text-center bg-darkGrey'>
			<div>title</div>
			<div>subtitle</div>

			<form className='grid grid-cols-2 my-8'>
				<div className='w-3/4 mx-auto my-2 text-start'>
					<div>Pet Name</div>
					<InputBox
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
						options={options}
					/>
				</div>
				<div className='w-3/4 mx-auto my-2 text-start'>
					<div>Pawrent</div>
					<InputBox
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
						options={options}
					/>
				</div>
				<div className='w-3/4 mx-auto my-2 text-start'>
					<div>Gender</div>
					<div className='flex justify-around'>
						<InputBox
							formData={formData}
							updateForm={setFormData}
							type='radio'
							label='gender|Male'
						/>
						<InputBox
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
						formData={formData}
						updateForm={setFormData}
						type='text'
						label='dob'
					/>
				</div>
				<div className='w-3/4 mx-auto my-2 text-start'>
					<div>Contact Phone No.</div>
					<InputBox
						formData={formData}
						updateForm={setFormData}
						type='text'
						label='phone'
					/>
				</div>
				<div className='w-3/4 mx-auto my-2 text-start'>
					<div>Address</div>
					<InputBox
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
							formData.city !== "" ? formData.city : "Please choose a city"
						}
						options={options}
					/>
				</div>
				<div className='w-3/4 mx-auto my-2 text-start'>
					<div>Township</div>
					<DropDown
						updateFormData={setFormData}
						formData={formData}
						dropDownName='township'
						label={
							formData.township !== ""
								? formData.township
								: "Please choose a township"
						}
						options={options}
					/>
				</div>
			</form>

			<div>
				<button type='submit'>BUTTON Primary</button>
				<button>Button Secondary</button>
			</div>
		</div>
	);
};

export default Form;
