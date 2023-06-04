import Navigate from '@/widgets/Navigate/Navigate'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const App = () => {
	const { AuthUser } = useSelector((state: RootState) => state.auth)
	const navigate = useNavigate()
	useEffect(() => {
		navigate(AuthUser ? '/studio' : '/')
	}, [AuthUser, navigate])
	return (
		<div>
			<Navigate />
			<Outlet />
		</div>
	)
}

export default App
