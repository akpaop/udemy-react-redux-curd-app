import { useState } from 'react';
import { SignIn } from './SignIn';

export const App = () => {
	const [name, setName] = useState('');
	console.log('name', name);
	return (
		<div>
			udemy-react-app-chat
			<SignIn setName={setName} />
		</div>
	);
};
