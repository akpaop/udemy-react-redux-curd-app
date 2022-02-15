import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@mui/material/Avatar';
// import { green } from '@mui/material/colors';

import { MessageField } from './MessageField';

const useStyles = makeStyles(() => ({
	root: { gridRow: 2, margin: '26px' },
}));

export const MessageFooter = ({ name }) => {
	const [inpText, setInpText] = useState('');

	useEffect(() => {
		// console.log(inpText);
	}, [inpText]);

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={1}>
					<Avatar
						// sx={{ bgcolor: green[500] }}
						variant='rounded'
					>
						{name}
					</Avatar>
				</Grid>
				<Grid item xs={9}>
					<MessageField
						inpText={inpText}
						setInpText={setInpText}
						name={name}
					/>
				</Grid>
				<Grid item xs={1}>
					{inpText}
				</Grid>
			</Grid>
		</div>
	);
};
