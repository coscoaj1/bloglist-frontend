import '../Index.css';
import Alert from '@material-ui/lab/Alert';

const Notification = ({ message }) => {
	if (message === null) {
		return null;
	}
	return <Alert>{message}</Alert>;
};

export default Notification;
