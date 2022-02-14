import { TextField } from '@material-ui/core';

export const MessageField = ({ setInpText }) => {
	return (
		<div>
			<TextField
				label='Please Input Message'
				fullWidth
				onChange={(e) => setInpText(e.target.value)}
			/>
		</div>
	);
};
