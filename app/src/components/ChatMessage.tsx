import * as React from 'react'

interface ButtonProps {
  message: any
  user: firebase.User | null
}

const Button: React.FunctionComponent<ButtonProps> = ({ message, user }) => {
  const { uid, text, photoURL } = message

  const messageType = user && user.uid === uid ? 'sent' : 'received'

  return (
    <div className={messageType}>
      <img src={photoURL} />
      <p>{text}</p>
    </div>
  )
}

export default Button
