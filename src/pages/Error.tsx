import { FC } from 'react'
const Error: FC<{ page: string }> = ({ page }) => {
	return <h2>Error: {page}</h2>
}

export default Error
