import React, { useState } from "react";

import axios from "axios";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("http://localhost:8080/api/users/sign_in", {
				email,
				password,
			});
			console.log("Login successful");
			console.log(res.data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="w-full max-w-xs">
			<form
				className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				onSubmit={(e) => submitHandler(e)}
			>
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
						type="text"
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
						className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						placeholder="******************"
						name="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<p className="text-red-500 text-xs italic">
						Please choose a password.
					</p>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Sign In
					</button>
				</div>
			</form>
		</div>
	);
}
