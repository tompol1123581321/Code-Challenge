import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import ChatWindow from "./components/chatWindow"
import DummyControls from "./components/dummyControls"
import "./style/generalStyles.scss"

function App() {
	const [personalInfo, setPersonalInfo] = useState({})
	const [massages, setMassages] = useState<any>([])
	useEffect(() => {
		const gettingData = async () => {
			try {
				const allData = await axios.get(
					"https://jsonplaceholder.typicode.com/users/1"
				)
				setPersonalInfo(allData.data)
			} catch (err) {
				console.error(err)
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
									personalInfo={personalInfo}
									massages={massages}
									setMassages={setMassages}
								/>
							</Col>
							<Col md={6}>
								<ChatWindow
									setMassages={setMassages}
									massages={massages}
									personalInfo={personalInfo}
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
