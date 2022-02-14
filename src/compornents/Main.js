import { makeStyles } from '@material-ui/core/styles';
import { MessageFooter } from './MessageFooter';
import { MessageList } from './MessageList';

const useStyles = makeStyles(() => ({
	root: {
		// backgroundColor: 'red',
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
			<MessageFooter name={name}></MessageFooter>
		</div>
	);
};
