import React, { useEffect, useState } from "react";
import {
	Banner,
	Listitem,
	Form,
	Notification,
	Contextmenu,
} from "@/Components";
import { generateString } from "@/constants";

const Dashboard = () => {
	const [patients, setPatientlist] = useState([
		{
			id: "gjZBo",
			petName: "Milo",
			status: "Picky Eater",
			pawrent: "The Nu San",
			breed: "Bulldogs",
			gender: "Male",
			dob: "1-5-2021",
			phone: "09797122499",
			address: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
		},
		{
			id: "wIThi",
			petName: "Milo",
			status: "Picky Eater",
			pawrent: "The Nu San",
			breed: "Beagle",
			gender: "Male",
			dob: "1-5-2021",
			phone: "09797122499",
			address: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
		},
		{
			id: "RyWrp",
			petName: "Poodle",
			status: "Allergy",
			pawrent: "The Nu San",
			breed: "Poodles",
			gender: "Male",
			dob: "1-5-2021",
			phone: "09797122499",
			address: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
		},
		{
			id: "IdzcK",
			petName: "Milo",
			status: "Allergy",
			pawrent: "The Nu San",
			breed: "Corgi",
			gender: "Male",
			dob: "1-5-2021",
			phone: "09797122499",
			address: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
		},
	]);
	const [filteredPatientList, setFilteredPatientList] = useState([
		{
			id: "",
			petName: "",
			status: "",
			pawrent: "",
			breed: "",
			gender: "",
			dob: "",
			phone: "",
			address: "",
		},
	]);
	const [isShow, setIsShow] = useState({
		addForm: false,
		updateForm: false,
		contextMenu: false,
		confirmBox: false,
	});
	const [notif, setNotif] = useState({ isShow: false, text: "" });

	const [anchorPoints, setAnchorPoints] = useState({ x: 0, y: 0 });

	const [selectedPatient, setSelectedPatient] = useState("");

	const [filter, setFilter] = useState({
		status: "Status All",
		breed: "Breed All",
		row: "10",
	});

	const [isFiltered, setIsFiltered] = useState({ status: false, breed: false });

	const closeForm = () => {
		setIsShow({
			addForm: false,
			updateForm: false,
			contextMenu: false,
			confirmBox: false,
		});
	};

	const showAddForm = () => {
		setIsShow({ ...isShow, addForm: true });
	};

	const showUpdateForm = (id: string) => {
		setSelectedPatient(id);
		setIsShow({ ...isShow, updateForm: true });
	};

	const showNotif = (operation: string) => {
		setNotif({ isShow: true, text: "Patient is Successfully " + operation });
	};

	const showConfirmBox = () => {
		setIsShow({ ...isShow, confirmBox: true });
	};

	const updateList = (newPatientData: any, type: string) => {
		if (type === "Update") {
			const newPatientList = [...patients];

			const index = newPatientList.findIndex(
				(patient) => patient.id === newPatientData.id
			);

			newPatientList.splice(index, 1, newPatientData);

			setPatientlist(newPatientList);
		} else if (type === "Delete") {
			const newPatientList = patients.filter(
				(patient) => patient.id !== newPatientData.id
			);

			setPatientlist(newPatientList);
		} else {
			const id = generateString(5);
			setPatientlist([...patients, { id, ...newPatientData }]);
		}

		showNotif(type + "d!");
		closeForm();
	};

	const toggleContextMenu = (
		e: React.MouseEvent<HTMLDivElement>,
		id: string
	) => {
		setSelectedPatient(id);
		setAnchorPoints({ x: window.screen.width - e.pageX, y: e.pageY });
		setIsShow({ ...isShow, contextMenu: !isShow.contextMenu });
	};

	useEffect(() => {
		if (notif.isShow) {
			setTimeout(() => {
				setNotif({ isShow: false, text: "" });
			}, 3000);
		}
	}, [notif]);

	useEffect(() => {
		let newIsFiltered = { ...isFiltered };

		if (filter.status !== "Status All") {
			const newFilteredList = patients.filter(
				(patient) => patient.status === filter.status
			);

			newIsFiltered = { ...newIsFiltered, status: true };
			setFilteredPatientList(newFilteredList);
		} else {
			newIsFiltered = { ...newIsFiltered, status: false };
		}

		if (filter.breed !== "Breed All") {
			const newFilteredList = patients.filter(
				(patient) => patient.breed === filter.breed
			);
			newIsFiltered = { ...newIsFiltered, breed: true };
			setFilteredPatientList(newFilteredList);
		} else {
			newIsFiltered = { ...newIsFiltered, breed: false };
		}

		setIsFiltered(newIsFiltered);
	}, [filter]);

	return (
		<div className='px-4 m-4 text-black bg-white'>
			<Banner showForm={showAddForm} filter={filter} setFilter={setFilter} />

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
					label={true}
				/>
			</div>
			<div className='py-4'>
				{isFiltered.breed || isFiltered.status
					? filteredPatientList.map((patient) => (
							<Listitem
								id={patient.id}
								key={patient.id}
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
					  ))
					: patients.map((patient) => (
							<Listitem
								id={patient.id}
								key={patient.id}
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
					  ))}
			</div>

			{isShow.addForm && (
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

			{isShow.updateForm && (
				<div className='absolute top-0 left-0 bg-darkGrey/[0.5] w-screen h-screen'>
					<Form
						title='Edit Patient'
						subtitle='Update patient information below'
						buttonPrimary='Update'
						closeForm={closeForm}
						updateList={updateList}
						patient={
							patients.filter((patient) => patient.id === selectedPatient)[0]
						}
					/>
				</div>
			)}

			{isShow.contextMenu && (
				<Contextmenu
					x={anchorPoints.x}
					y={anchorPoints.y}
					showUpdateForm={showUpdateForm}
					showConfirmBox={showConfirmBox}
					id={selectedPatient}
				/>
			)}

			{notif.isShow && (
				<Notification showNotif={notif.isShow} text={notif.text} />
			)}

			{isShow.confirmBox && (
				<div className='absolute top-0 left-0 bg-darkGrey/[0.5]	 w-screen h-screen'>
					<div className='relative w-4/12 px-4 py-2 -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2'>
						<div className='text-lg text-teal'>Confirmation</div>

						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='absolute w-6 h-6 cursor-pointer top-4 right-4'
							onClick={closeForm}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>

						<div className='py-8'>
							Are you sure you want to delete this patient?
						</div>

						<div className='flex items-center justify-center gap-4 pb-2'>
							<button
								className='px-6 py-2 text-white border-2 rounded-md bg-red border-red'
								onClick={() => updateList({ id: selectedPatient }, "Delete")}>
								Delete
							</button>
							<button
								className='px-6 py-2 border-2 rounded-md border-lightGrey'
								onClick={closeForm}>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Dashboard;
