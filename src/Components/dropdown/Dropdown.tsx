import React, { useEffect, useRef, useState } from "react";

interface propsTypes {
	label: string;
	options: string[];
	updateFormData: any;
	formData: any;
  dropDownName : string;
}

const DropDown: React.FC<propsTypes> = ({
	label,
	options,
	updateFormData,
	formData,
  dropDownName,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [listening, setListening] = useState(false);
  

	const menuRef = useRef<any>();

	useEffect(() => {
		if (listening) return;
		if (!menuRef.current) return;
		setListening(true);

		const handleListenClick = (e: MouseEvent) => {
			const cur = menuRef.current;
			const node = e.target;
			if (cur?.contains(node)) return;
			setIsOpen(false);
		};

		window.addEventListener(`click`, handleListenClick);

		return () => window.removeEventListener("click", handleListenClick);
	}, []);

	return (
		<div
			className='relative flex flex-col items-center justify-center grow'
			ref={menuRef}>
			<button
				id='dropdownDefault'
				data-dropdown-toggle='dropdown'
				onClick={() => setIsOpen(!isOpen)}
				className='inline-flex items-center w-full px-2 py-1 mx-auto text-sm font-medium text-center bg-white border-2 rounded-lg text-darkGrey border-lightGrey'
				type='button'>
				<div className='w-3/4'>{label}</div>
				<svg
					className='w-1/4 h-4 '
					aria-hidden='true'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M19 9l-7 7-7-7'></path>
				</svg>
			</button>

			{isOpen && (
				<div
					id='dropdown'
					className='absolute z-10 divide-y rounded shadow top-full bg-grey divide-lightGrey '>
					<ul
						className='py-1 text-sm bg-white'
						aria-labelledby='dropdownDefault'>
						{options.map((option, index) => {
							return (
								<li
									key={index}
									className='block px-4 py-2 hover:bg-lightGrey'
									onClick={() => {
										updateFormData({
											...formData,
											[dropDownName]: option,
										});
                    setIsOpen(false);
                  }}>
									{option}
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

export default DropDown;
