import React, { useState } from "react";
import { Banner, Labels } from "@/Components";
import Listitem from "@/Components/listitem/Listitem";
import Form from "@/Components/form/Form";

const Dashboard = () => {
	const [patients, setPatientlist] = useState([
		{
			id: "B_0023",
			petName: "Milo",
			status: "Status",
			pawrent: "The Nu San",
			breed: "Beagle",
			gender: "Male",
			dob: "1-5-2021",
			phone: "09797122499",
			address: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
		},
		{
			id: "B_0123",
			petName: "Milo",
			status: "Status",
			pawrent: "The Nu San",
			breed: "Beagle",
			gender: "Male",
			dob: "1-5-2021",
			phone: "09797122499",
			address: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
		},
		{
			id: "B_0323",
			petName: "Milo",
			status: "Status",
			pawrent: "The Nu San",
			breed: "Beagle",
			gender: "Male",
			dob: "1-5-2021",
			phone: "09797122499",
			address: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
		},
		{
			id: "B_2023",
			petName: "Milo",
			status: "Status",
			pawrent: "The Nu San",
			breed: "Beagle",
			gender: "Male",
			dob: "1-5-2021",
			phone: "09797122499",
			address: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
		},
	]);

	return (
		<div className='px-4 m-4 text-black bg-white'>
			<Banner />

			<div className='font-medium text-teal border-y-2 border-lightGrey'>
				<Listitem
					id='ID'
					petName='Pet Name'
					status='Status'
					pawrent='Pawrent'
					breed='Breed'
					gender='Gender'
					dob='Date of Birth'
					phone='Contact Phone No.'
					address='Address'
				/>
			</div>
			<div className='py-4'>
				{patients.map((patient) => {
					return (
						<Listitem
							key={patient.id}
							id={patient.id}
							petName={patient.petName}
							status={patient.status}
							pawrent={patient.pawrent}
							breed={patient.breed}
							gender={patient.gender}
							dob={patient.dob}
							phone={patient.phone}
							address={patient.address}
						/>
					);
				})}
			</div>

			<Form/>
		</div>
	);
};

export default Dashboard;
