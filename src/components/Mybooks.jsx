import React from "react"
import { Container, CardColumns, Card, Button } from "react-bootstrap"
import data from "../components/data/data.json"

class Mybooks extends React.Component {
	render() {
		return (
			<Container>
				<CardColumns>
					{data.map((data) => (
						<Card>
							<Card.Img variant="top" src={data.img} />
							<Card.Body>
								<Card.Title>{data.title}</Card.Title>
							</Card.Body>
						</Card>
					))}
				</CardColumns>
			</Container>
		)
	}
}

export default Mybooks