import { useParams } from 'react-router-dom'

const Project = () => {
	const { key } = useParams()
	return (
		<div>
			<h2>Project {key}</h2>
		</div>
	)
}

export default Project
