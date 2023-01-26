import { useEffect, useState } from 'react';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const PageMembers = () => {
	const [memberInfo, setMemberInfo] = useState({message: ''});

	useEffect(() => {
		(async () => {
			setMemberInfo((await axios.get(`${backendUrl}/get-member-info`)).data);
		})();
	}, []);
	return (
		<div className="page pageMembers">
			<p>{memberInfo.message}</p>
		</div>
	);
};