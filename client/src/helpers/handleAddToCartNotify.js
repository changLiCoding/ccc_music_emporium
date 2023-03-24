import { toast } from "react-toastify";

const handleAddToCartNotify = (errorMsg) =>
	toast.success(errorMsg, {
		position: "top-center",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
		theme: "light",
	});

export default handleAddToCartNotify;
