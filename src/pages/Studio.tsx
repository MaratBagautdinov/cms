import { logout } from '@/features/AuthForm/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { RootState } from '../store'
import { Link } from 'react-router-dom'
const Studio = () => {
	const dispatch = useDispatch()
	const { AuthUser } = useSelector((state: RootState) => state.auth)
	const [projects, setProjects] = useState<{ id: string; title: string }[]>([
		{
			id: 'asdwqefw342341',
			title: 'first'
		},
		{
			id: 'a12321ca34224',
			title: 'two'
		},
		{
			id: 'f42f2145f1234',
			title: 'three'
		}
	])
	return (
		<div>
			<h2>Studio: {AuthUser}</h2>
			{projects.map(project => (
				<Link to={`/project/${project.id}`} key={project.id}>
					<p>{project.title}</p>
				</Link>
			))}
			<button
				aria-label='Create'
				onClick={() =>
					setProjects([...projects, { id: 'asd1231g3', title: 'new' }])
				}
			>
				Create
			</button>
			<button aria-label='logout' onClick={() => dispatch(logout())}>
				Logout
			</button>
		</div>
	)
}

export default Studio
