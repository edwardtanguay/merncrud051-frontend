import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageMembers = () => {
	const { memberInfo, currentUserIsInAccessGroup } = useContext(AppContext);

	return (
		<div className="page pageMembers">
			{currentUserIsInAccessGroup('members') ? (
				<>
					<h2>Message</h2>
					<p className="message">{memberInfo.message}</p>

					<h2>We currently have {memberInfo.members.length} members</h2>
					<ul>
						{memberInfo.members.map(member => {
							return (
								<li key={member._id}>{member.firstName} {member.lastName}</li>
						)
					})}
					</ul>
				</>
			) : (
				<div className="noAccessMessage">You have no access to this page.</div>
			)}
		</div>
	);
};
