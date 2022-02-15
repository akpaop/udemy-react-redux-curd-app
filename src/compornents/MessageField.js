import { TextField } from '@material-ui/core';

export const MessageField = ({ inpText, setInpText, name }) => {
	return (
		<div>
			<TextField
				label='Please Input Message'
				fullWidth
				onChange={(e) => setInpText(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						if (e.target.value !== '') {
							console.log('push messange to Firebase:' + inpText);
							e.preventDefault();
							setInpText('');
						}
					}
				}}
				value={inpText}
			/>
			{name}
		</div>
	);
};
