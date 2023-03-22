import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import axios from "axios";

export default function Register() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [cookies, setCookie, removeCookie] = useCookies([]);

	const navigate = useNavigate();

	const notify = (errorMsg) =>
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

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("http://localhost:8080/api/users/sign_up", {
				email,
				firstName,
				lastName,
				password,
				passwordConfirm,
			});
			setCookie("user_id", res.data.user.id);
			setCookie("user_name", res.data.user.first_name, { path: "/" });
			navigate("/");
		} catch (error) {
			console.log(error);
			notify(error.response.data.message);
		}
	};

	return (
		<div className="mb-28">
			<header>
				<h1 className="text-4xl text-center my-16 font-bold">
					New to the store? <em>Register an account today! </em>
				</h1>
			</header>
			<div className="flex justify-center items-center">
				<div className="card lg:card-side bg-primary shadow-xl p-10 border-solid border-2 border-black">
					<figure>
						<img
							className="w-96"
							src="https://cdn.shopify.com/s/files/1/1201/9020/products/PXL_20220509_234448770.PORTRAIT_1024x1024.jpg?v=1652140130"
							alt="Register Photo"
						/>
					</figure>
					<div className="card-body w-96">
						<h1 className="text-2xl text-center mb-5 font-bold">
							Register Here!
						</h1>
						<form
							className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
							onSubmit={(e) => submitHandler(e)}
						>
							<div className="mb-4">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
									htmlFor="firstName"
								>
									First Name
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="firstName"
									name="firstName"
									type="text"
									placeholder="First Name"
									required
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
								/>
							</div>
							<div className="mb-4">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
									htmlFor="lastName"
								>
									Last Name
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="lastName"
									name="lastName"
									type="text"
									placeholder="Last Name"
									required
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
								/>
							</div>
							<div className="mb-4">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
									htmlFor="email"
								>
									Email
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="email"
									name="email"
									type="email"
									pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
									required
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="mb-6">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
									htmlFor="password"
								>
									Password
								</label>
								<input
									className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"
									minLength={6}
									required
									value={password}
									name="password"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div className="mb-6">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
									htmlFor="passwordConfirm"
								>
									Confirm Password
								</label>
								<input
									className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
									id="passwordConfirm"
									type="password"
									placeholder="******************"
									minLength={6}
									pattern={password}
									title="Password confirmation does not match password!"
									required
									value={passwordConfirm}
									name="passwordConfirm"
									onChange={(e) => setPasswordConfirm(e.target.value)}
								/>
							</div>
							<div className="flex items-center justify-between">
								<button
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Register!
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
