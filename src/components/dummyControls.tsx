import { Button } from "@material-ui/core"

import React from "react"
import { Card } from "react-bootstrap"
import { MassageInterface } from "../interfaces"
var randomWords = require("random-words")

const DummyControls: React.FC<{
	massages: Array<MassageInterface>
	setMassages: ([]: Array<MassageInterface>) => void
	showHide: Boolean
	setShowHide: (showHide: boolean) => void
}> = ({ massages, setMassages, setShowHide, showHide }) => {
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
							const newReply: MassageInterface = {
								text: randomWords(),
								m: false,
								timestamp: `${date.getDate()}.${date.getMonth()}.-${date.getHours()}:${date.getMinutes()}`,
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
			</Card>
		</div>
	)
}

export default DummyControls
