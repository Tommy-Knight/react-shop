import React from "react"
import { Navbar, Nav } from "react-bootstrap"

export default function Mynav() {
	return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">Navigational Thing</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="#home">E.T go Home</Nav.Link>
					<Nav.Link href="#about">About</Nav.Link>
					<Nav.Link href="#browse">Browse</Nav.Link>
				</Nav>
			</Navbar>
	)
}
