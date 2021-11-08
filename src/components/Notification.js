import '../Index.css';
import Alert from '@mui/material/Alert';

const Notification = ({ message }) => {
	if (message === null) {
		return null;
	}
	return <Alert>{message}</Alert>;
};

export default Notification;
