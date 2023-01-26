import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageAdmins = () => {
	const { adminInfo, currentUserIsInAccessGroup, getNoAccessMessage } =
		useContext(AppContext);

	return (
		<div className="page pageAdmins">
			{currentUserIsInAccessGroup('members') ? (
				<>
					<h2>Message</h2>
					<p className="message">{adminInfo.message}</p>
				</>
			) : (
				<div className="noAccessMessage">{getNoAccessMessage()}</div>
			)}
		</div>
	);
};
