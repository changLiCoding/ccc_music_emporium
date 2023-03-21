import React from "react";

function Register() {
	return (
		<div className="h-screen">
			<header>
				<h1 className="text-4xl text-center my-16">
					New to the store? Register a new account today!{" "}
				</h1>
			</header>
			<div className="flex justify-center items-center">
				<div className="card lg:card-side bg-primary shadow-xl p-5 border-solid border-2 border-black">
					<figure>
						<img
							src="https://st2.depositphotos.com/3662505/6737/i/450/depositphotos_67376927-stock-photo-music-store.jpg"
							alt="Piano"
						/>
					</figure>
					<div className="card-body ">
						<h1 className="text-2xl text-center mb-5">Register Here!</h1>
						<form
							className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
							// onSubmit={(e) => submitHandler(e)}
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
									// value={firstName}
									// onChange={(e) => setEmail(e.target.value)}
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
									// value={lastName}
									// onChange={(e) => setEmail(e.target.value)}
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
									type="text"
									placeholder="Email"
									// value={email}
									// onChange={(e) => setEmail(e.target.value)}
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
									name="password"
									// onChange={(e) => setPassword(e.target.value)}
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

export default Register;
