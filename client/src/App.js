import "./App.css";

import useHomeDataFetch from "./hooks/useHomeDataFetch";

function App() {
	const { data } = useHomeDataFetch();
	console.log(data);
	return <div>{data.msg}</div>;
}

export default App;
