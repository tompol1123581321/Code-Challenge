import React from "react"
import ChatWindow from "./components/chatWindow"
import DummyControls from "./components/dummyControls"
import "./style/generalStyles.scss"

function App() {
	return (
		<div className="wholePage">
			<div className="appContainer">
				<DummyControls />
				<ChatWindow />
			</div>
		</div>
	)
}

export default App
