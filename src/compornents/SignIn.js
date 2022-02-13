import { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link
				color='inherit'
				href='https://material-ui.com/'
				target='_blank'
				rel='noopener'
			>
				akpaop
			</Link>
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export const SignIn = ({ setName }) => {
	const [btnDisable, setBtnDisable] = useState(true);
	const [inpName, setInpName] = useState('');

	useEffect(() => {
		console.log(inpName);
		if (inpName !== '') {
			setBtnDisable(false);
		} else {
			setBtnDisable(true);
		}
	}, [inpName]);

	const classes = useStyles();

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component='h1' variant='h5'>
					Welcome
				</Typography>
				<form className={classes.form} noValidate>
					<Button
						type='button'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
						onClick={() => {
							//console.log('Click');
							setName(inpName);
						}}
						disabled={btnDisable}
					>
						はじめる
					</Button>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='name'
						label='ニックネーム'
						name='name'
						autoFocus
						onChange={(e) => {
							setInpName(e.target.value);
						}}
					/>
				</form>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
};
