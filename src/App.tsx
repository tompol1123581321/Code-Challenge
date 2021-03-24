import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import ChatWindow from "./components/chatWindow"
import DummyControls from "./components/dummyControls"
import "./style/generalStyles.scss"

function App() {
	return (
		<div className="wholePage">
			<Container>
				<div className="appContainer">
					<Container>
						<Row>
							<Col>
								<DummyControls />
							</Col>
							<Col>
								<ChatWindow />
							</Col>
						</Row>
					</Container>
				</div>
			</Container>
		</div>
	)
}

export default App
