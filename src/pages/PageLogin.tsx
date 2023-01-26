import { useContext, useRef } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';

export const PageLogin = () => {
	const {
		appTitle,
		loginForm,
		changeLoginFormField,
		submitLoginForm
	} = useContext(AppContext);

	return (
		<div className="page pageLogin">
			<Helmet>
				<title>{appTitle} - Login</title>
			</Helmet>
					<form>
						<fieldset>
							<legend>Please provide your credentials</legend>
							<div className="row">
								<label>Username</label>
								<div>
									<input onChange={(e) => changeLoginFormField('username', e.target.value)} value={loginForm.fields.username} autoFocus type="text" />
								</div>
							</div>

							<div className="row">
								<label>Password</label>
								<div>
									<input onChange={(e) => changeLoginFormField('password', e.target.value)} value={loginForm.fields.password} type="password" />
								</div>
							</div>

							<div className="buttonArea">
						<div className="message">{loginForm.message}</div>
								<button type="button" onClick={() => submitLoginForm()}>Submit</button>
							</div>
						</fieldset>
					</form>
		</div>
	);
};
