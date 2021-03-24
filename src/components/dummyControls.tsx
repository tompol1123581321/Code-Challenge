import { Button } from "@material-ui/core"
import axios from "axios"
import React, { useEffect, useState } from "react"
import {
	Card,
	ListGroup,
	ListGroupItem,
} from "react-bootstrap"
import "../style/components.scss"

const DummyControls = () => {
	interface Person {
		id?: number
		name?: string
		username?: string
		email?: string
		address?: {
			street: string
			suite: string
			city: string
			zipcode: string
		}
		phone?: string
		website?: string
		company?: {
			name: string
			catchPhrase: string
			bs: string
		}
	}
	const [showHide, setShowHide] = useState<boolean>(false)
	const [personalInfo, setPersonalInfo] = useState<Person>(
		{}
	)
	useEffect(() => {
		const gettingInfo = async () => {
			const { data }: { data: Person } = await axios.get(
				"https://jsonplaceholder.typicode.com/users/1"
			)
			setPersonalInfo(data)
		}
		gettingInfo()
	}, [])

	return (
		<div className="DummyControls">
			<h4>Dummy Controls</h4>

			<div className="buttons">
				<Button variant="contained" color="secondary">
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
				<Card>
					<Card.Header>
						<h4>Operator Info:</h4>
					</Card.Header>
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
				</Card>
			)}
		</div>
	)
}

export default DummyControls
