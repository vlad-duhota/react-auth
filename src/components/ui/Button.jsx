import React from 'react'

const Button = ({ children, ...rest }) => {
	return (
		<button
			{...rest}
			className='button-primary'
		>
			<span className=''>{children}</span>
		</button>
	)
}

export default Button
