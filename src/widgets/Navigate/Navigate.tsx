import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/index'
import s from './Navigate.module.sass'
const Navigate = () => {
	const { AuthUser } = useSelector((state: RootState) => state.auth)
	return (
		<header className={s.header}>
			<img src='logo.svg' alt='logo' />
			<nav>
				<NavLink to='/documentation'>
					<p>Documentation</p>
				</NavLink>
				{AuthUser ? (
					<NavLink to='/studio'>
						<p>Studio</p>
					</NavLink>
				) : (
					<NavLink to='/auth'>
						<p>Auth</p>
					</NavLink>
				)}
			</nav>
		</header>
	)
}

export default Navigate
