import { useDispatch } from 'react-redux'
import { login } from '@/features/AuthForm/authSlice'
import { useState } from 'react'
const AuthForm = () => {
	const dispatch = useDispatch()
	const [name, setName] = useState<string>('')
	return (
		<div>
			<input type='text' onChange={e => setName(e.target.value)} />
			<button aria-label='Login' onClick={() => dispatch(login(name))}>
				Login
			</button>
		</div>
	)
}

export default AuthForm
