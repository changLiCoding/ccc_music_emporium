import { toast } from "react-toastify";

export default function handleSuccessPay(succeeded, cb1, cb2) {
	const handleClose = () => {
		cb1();
		cb2("/");
	};
	toast.success(succeeded, {
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		onClose: handleClose,
	});
}
