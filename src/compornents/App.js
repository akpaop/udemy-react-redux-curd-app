import { useState } from 'react';
import { Main } from './Main';
import { SignIn } from './SignIn';
import config from '../config';

export const App = () => {
	const [name, setName] = useState('');
	console.log('App name', name);
	console.log('config', config.signInEnabled);

	const divMain = (
		<div>
			udemy-react-app-chat
			<Main name={name} />
		</div>
	);
	const divSignIn = (
		<div>
			udemy-react-app-chat
			<SignIn setName={setName} />
		</div>
	);

	if (config.signInEnabled === true && name === '') {
		return divSignIn;
	} else {
		return divMain;
	}
};
