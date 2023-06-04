import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthUser } from '@/types'
export interface authState {
	AuthUser: AuthUser
}

const initialState: authState = {
	AuthUser: localStorage.getItem('AuthUser') || false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<string>) => {
			state.AuthUser = action.payload
			localStorage.setItem('AuthUser', action.payload)
		},
		logout: state => {
			state.AuthUser = false
		}
	}
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer
