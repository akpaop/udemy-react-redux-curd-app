import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@mui/material/Avatar';
// import { green } from '@mui/material/colors';

const useStyles = makeStyles(() => ({
	root: { gridRow: 2, margin: '26px' },
}));

export const MessageInputField = ({ name }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container>
				<Grid xs={1}>
					<Avatar
						// sx={{ bgcolor: green[500] }}
						variant='rounded'
					>
						{name}
					</Avatar>
				</Grid>
				<Grid xs={10}>
					<input type='text' />
				</Grid>
				<Grid xs={1}></Grid>
			</Grid>
		</div>
	);
};
