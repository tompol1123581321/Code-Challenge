import { Button, TextField } from "@material-ui/core"
import React, { useState } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { MassageInterface, Person } from "../interfaces"
import "../style/components.scss"
import Massage from "./massage"

const ChatWindow: React.FC<{
	personalInfo: Person
	massages: Array<MassageInterface>
	setMassages: ([]: Array<MassageInterface>) => void
}> = ({ personalInfo, massages, setMassages }) => {
	const [massage, setMassage] = useState<MassageInterface>(
		{} as MassageInterface
	)

	return (
		<div className="ChatWindow">
			<Card>
				<Card.Header>
					<Card.Title>{personalInfo.name}</Card.Title>
					<Card.Subtitle>
						{personalInfo.phone}
					</Card.Subtitle>
				</Card.Header>

				<Card.Body
					style={{
						height: "16rem",
						overflow: "scroll",
					}}
				>
					<Row>
						<Col>
							{massages.map((m: MassageInterface) => (
								<Massage
									key={Math.random() * 1000}
									massage={m}
								/>
							))}
						</Col>
					</Row>
				</Card.Body>

				<TextField
					label="Write your massage"
					multiline
					rows={2}
					variant="outlined"
					value={massage.text}
					onChange={(e) => {
						const date = new Date()
						setMassage({
							text: e.target.value,
							m: true,
							timestamp: `${date.getDate()}.${date.getMonth()}-${date.getHours()}:${date.getMinutes()}`,
						})
					}}
				/>
				<Button
					onClick={() => {
						if (massage.text !== "") {
							setMassages([...massages, massage])
							setMassage({
								text: "",
								m: true,
								timestamp: "",
							})
						}
					}}
					variant="contained"
					color="primary"
				>
					Send
				</Button>
			</Card>
		</div>
	)
}

export default ChatWindow
