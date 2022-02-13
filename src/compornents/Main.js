import { makeStyles } from '@material-ui/core/styles';
import { MessageInputField } from './MessageInputField';
import { MessageList } from './MessageList';

const useStyles = makeStyles(() => ({
	root: {
		backgroundColor: 'red',
		display: 'grid',
		height: '100vh',
		gridTemplateRows: '1fr auto',
	},
}));

export const Main = ({ name }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<MessageList></MessageList>
			<MessageInputField name={name}></MessageInputField>
		</div>
	);
};
