import React from "react"
import Mynav from "./components/Mynav"
import "bootstrap/dist/css/bootstrap.min.css"
import Myfoot from "./components/Myfoot"
import Myjumbo from "./components/Myjumbo"
import Mybooks from "./components/Mybooks"

function App() {
	return (
		<>
			<Myfoot />
			<Mynav />
			<Myjumbo />
			<Mybooks />
		</>
	)
}

export default App
