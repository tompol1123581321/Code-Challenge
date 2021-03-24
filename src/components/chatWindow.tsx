import { Button, TextField } from "@material-ui/core"
import React from "react"
import { Card } from "react-bootstrap"
import "../style/components.scss"
const ChatWindow = () => {
	return (
		<div className="ChatWindow">
			<Card>
				<Card.Header>
					<Card.Title>Here will be name</Card.Title>
					<Card.Subtitle>Here will be number</Card.Subtitle>
				</Card.Header>

				<Card.Body
					style={{ minHeight: "13rem" }}
				></Card.Body>

				<TextField
					id="outlined-multiline-static"
					label="Write your massage"
					multiline
					rows={2}
					variant="outlined"
				/>
				<Button variant="contained" color="primary">
					Send
				</Button>
			</Card>
		</div>
	)
}

export default ChatWindow
