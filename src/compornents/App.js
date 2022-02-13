import { useState } from 'react';
import { Main } from './Main';
import { SignIn } from './SignIn';

export const App = () => {
	const [name, setName] = useState('');
	console.log('App name', name);

	const divMain = (
		<div>
			udemy-react-app-chat
			<Main />
		</div>
	);
	const divSignIn = (
		<div>
			udemy-react-app-chat
			<SignIn setName={setName} />
		</div>
	);

	if (name !== '') {
		return divMain;
	} else {
		return divSignIn;
	}
};
