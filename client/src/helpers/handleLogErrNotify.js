import { toast } from "react-toastify";

const handleLogErrNotify = (errorMsg) =>
	toast.error(errorMsg, {
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
	});

export default handleLogErrNotify;
