import React, { useEffect, useRef, useState } from "react";
import { Banner, Labels } from "@/Components";
import Listitem from "@/Components/listitem/Listitem";
import Form from "@/Components/form/Form";
import Contextmenu from "@/Components/contextmenu/Contextmenu";
import Notification from "@/Components/notification/Notification";

const Dashboard = () => {
	const [patients, setPatientlist] = useState([
		{
			id: "0",
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
			id: "1",
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
			id: "2",
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
			id: "3",
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

	const [isShowAddForm, setIsShowAddForm] = useState(false);
	const [isShowUpdateForm, setIsShowUpdateForm] = useState(false);
	const [isShowContextMenu, setIsShowContextMenu] = useState(false);
	const [notif, setNotif] = useState({ isShow: true, text: "aaaaaaaaaa" });

	const [anchorPoints, setAnchorPoints] = useState({ x: 0, y: 0 });

	const [selectedPatient, setSelectedPatient] = useState("");

	const closeForm = () => {
		setIsShowAddForm(false);
		setIsShowUpdateForm(false);
	};

	const showAddForm = () => {
		setIsShowAddForm(true);	
	};

	const showUpdateForm = (id: string) => {
		setSelectedPatient(id);
		setIsShowUpdateForm(true);
	};

	const updateList = (newPatientData: any, type: string) => {
		if (type === "Update") {
			const newPatientList = patients;

			const index = newPatientList.findIndex(
				(patient) => patient.id === newPatientData.id
			);

			console.log(newPatientData);
			console.log(index);

			newPatientList.splice(index, 1, newPatientData);

			setPatientlist(newPatientList);
		} else if (type === "Delete") {
			const newPatientList = patients.filter(
				(patient) => patient.id !== newPatientData.id
			);

			setPatientlist(newPatientList);
		} else {
			setPatientlist([...patients, newPatientData]);
		}

		showNotif(type + "d!");
		closeForm();
	};

	const showNotif = (operation: string) => {
		setNotif({ isShow: true, text: "Patient is Successfully " + operation });
	};

	const toggleContextMenu = (
		e: React.MouseEvent<HTMLDivElement>,
		id: string
	) => {
		setSelectedPatient(id);
		setAnchorPoints({ x: window.screen.width - e.pageX, y: e.pageY });
		setIsShowContextMenu(!isShowContextMenu);
	};

	// useEffect(() => {
	// 	console.log(patients);
	// 	console.log(isShowUpdateForm);
	// }, [patients, isShowUpdateForm]);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setNotif({ isShow: false, text: "" });
	// 	}, 3000);
	// }, [notif]);

	return (
		<div className='px-4 m-4 text-black bg-white'>
			<Banner showForm={showAddForm} />

			{isShowContextMenu && (
				<Contextmenu
					x={anchorPoints.x}
					y={anchorPoints.y}
					showUpdateForm={showUpdateForm}
					updateList={updateList}
					id={selectedPatient}
				/>
			)}

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
				{patients.map((patient, index) => {
					return (
						<div>
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
								showContextMenu={toggleContextMenu}
							/>
						</div>
					);
				})}
			</div>

			{isShowAddForm && (
				<div className='absolute top-0 left-0 bg-darkGrey/[0.5] w-screen h-screen'>
					<Form
						title='Add new Patient'
						subtitle='Enter new patient information below'
						buttonPrimary='Save'
						closeForm={closeForm}
						updateList={updateList}
					/>
				</div>
			)}

			{isShowUpdateForm && (
				<div className='absolute top-0 left-0 bg-darkGrey/[0.5] w-screen h-screen'>
					<Form
						title='Edit Patient'
						subtitle='Update patient information below'
						buttonPrimary='Update'
						closeForm={closeForm}
						updateList={updateList}
						patient={patients[Number(selectedPatient)]}
					/>
				</div>
			)}

			{notif.isShow && (
				<Notification showNotif={notif.isShow} text={notif.text} />
			)}
		</div>
	);
};

export default Dashboard;
