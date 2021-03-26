import { Chip } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { MassageInterface } from "../interfaces"
import "../style/components.scss"

const Massage: React.FC<{ massage: MassageInterface }> = ({
	massage,
}) => {
	const [className, setClassName] = useState<string>("")
	const [color, setColor] = useState<
		"primary" | "secondary" | "default" | undefined
	>("default")
	useEffect(() => {
		if (massage.m === true) {
			setClassName("massage")
			setColor("primary")
		} else {
			setClassName("reply")
			setColor("default")
		}
	}, [massage.m])

	return (
		<div className={className}>
			{massage.timestamp}
			<Chip color={color} label={massage.text} />
		</div>
	)
}

export default Massage
