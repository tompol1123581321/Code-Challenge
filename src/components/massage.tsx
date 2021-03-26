import { Chip } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import "../style/components.scss"

const Massage: React.FC<{
	massage: {
		text: string
		m: boolean
	}
}> = ({ massage }) => {
	const [className, setClassName] = useState<string>("")
	const [color, setColor] = useState<
		"primary" | "secondary" | "default" | undefined
	>("primary")
	useEffect(() => {
		if (massage.m === true) {
			setClassName("massage")
		} else {
			setClassName("reply")
			setColor("default")
		}
	}, [massage.m])

	return (
		<div className={className}>
			<Chip color={color} label={massage.text} />
		</div>
	)
}

export default Massage
