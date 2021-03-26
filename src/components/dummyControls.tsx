import { Button } from "@material-ui/core"

import React, { useState } from "react"
import {
	Card,
	ListGroup,
	ListGroupItem,
} from "react-bootstrap"
import { Person } from "../interfaces"
var randomWords = require("random-words")

const DummyControls: React.FC<{
	personalInfo: Person
	massages: any
	setMassages: any
}> = ({ personalInfo, massages, setMassages }) => {
	const [showHide, setShowHide] = useState<boolean>(false)

	return (
		<div className="DummyControls">
			<Card>
				<Card.Header>
					<Card.Title>Dummy Controls</Card.Title>
				</Card.Header>

				<div className="buttons">
					<Button
						onClick={() => {
							const date = new Date()
							const newReply = {
								text: randomWords(),
								m: false,
								timestamp: `${date.getDate()}.${date.getMonth()}-${date.getHours()}:${date.getMinutes()}`,
							}
							setMassages([...massages, newReply])
						}}
						variant="contained"
						color="secondary"
					>
						Add Massage
					</Button>
					<Button
						onClick={() => {
							setShowHide(!showHide)
						}}
						variant="contained"
						color="primary"
					>
						Load Operator Info
					</Button>
				</div>
				{showHide && (
					<Card.Body>
						<Card.Title>Operator Info:</Card.Title>
						<ListGroup>
							<ListGroupItem>
								Name: {personalInfo.name}
							</ListGroupItem>
							<ListGroupItem>
								Email: {personalInfo.email}
							</ListGroupItem>
							<ListGroupItem>
								Phone: {personalInfo.phone}
							</ListGroupItem>
							<ListGroupItem>
								Address: {personalInfo.address?.city}
								{","}
								{personalInfo.address?.street}
								{","}
								{personalInfo.address?.suite}
							</ListGroupItem>
							<ListGroupItem>
								Company: {personalInfo.company?.name}
							</ListGroupItem>
						</ListGroup>
					</Card.Body>
				)}
			</Card>
		</div>
	)
}

export default DummyControls
