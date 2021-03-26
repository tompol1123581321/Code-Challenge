import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import ChatWindow from "./components/chatWindow"
import DummyControls from "./components/dummyControls"
import { MassageInterface, Person } from "./interfaces"
import "./style/generalStyles.scss"

function App() {
	const [personalInfo, setPersonalInfo] = useState<Person>(
		{}
	)
	const [massages, setMassages] = useState<
		Array<MassageInterface>
	>([])
	const [showHide, setShowHide] = useState<boolean>(false)
	useEffect(() => {
		const gettingData: () => void = async () => {
			try {
				const allData: { data: Person } = await axios.get(
					"https://jsonplaceholder.typicode.com/users/1"
				)
				setPersonalInfo(allData.data)
			} catch (err) {
				alert(err)
			}
		}
		gettingData()
	}, [])

	return (
		<div className="wholePage">
			<Container>
				<div className="appContainer">
					<Container>
						<Row>
							<Col md={6}>
								<DummyControls
									massages={massages}
									setMassages={setMassages}
									showHide={showHide}
									setShowHide={setShowHide}
								/>
							</Col>
							<Col md={6}>
								<ChatWindow
									setMassages={setMassages}
									massages={massages}
									personalInfo={personalInfo}
									showHide={showHide}
								/>
							</Col>
						</Row>
					</Container>
				</div>
			</Container>
		</div>
	)
}

export default App
