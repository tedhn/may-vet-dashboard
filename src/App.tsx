import { Navbar } from "@/Components";

import UserImage from "@/resources/user_image.png";
import Dashboard from "@/pages/Dashboard";

function App() {
	return (
		<div className=' text-darkGrey'>
			<Navbar userImage={UserImage} /> <Dashboard />
		</div>
	);
}

export default App;
