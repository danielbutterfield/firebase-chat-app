import * as React from 'react'

interface ButtonProps {
  buttonText: string
  handleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FunctionComponent<ButtonProps> = ({
  buttonText,
  handleOnClick,
}) => {
  return <button onClick={handleOnClick}>{buttonText}</button>
}

export default Button
