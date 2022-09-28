import React, { FC } from "react";

interface PropTypes {
	label?: string;
	type: string;
	updateForm: React.Dispatch<React.SetStateAction<any>>;
	formData: any;
}

const InputBox: FC<PropTypes> = ({
	label = "",
	type,
	updateForm,
	formData,
}) => {
	return (
		<div className='flex items-center '>
			<input
				className='w-full px-2 py-1 text-sm border-2 rounded-lg border-lightGrey text-lightGrey'
				placeholder=''
				type={type}
				name={label.split("|")[0]}
				id={label}
				onChange={(e) =>
					updateForm({
						...formData,
						[e.target.name]:
							label.split("|")[0] !== "gender"
								? e.target.value
								: label.split("|")[1],
					})
				}
			/>

			{type === "radio" ? (
				<label className='ml-2 cursor-pointer' htmlFor={label}>
					{label.split("|")[1]}
				</label>
			) : null}
		</div>
	);
};

export default InputBox;
