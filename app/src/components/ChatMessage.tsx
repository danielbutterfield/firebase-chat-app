import * as React from 'react'

interface ButtonProps {
  photoURL: string
  text: string
  uid: string
  user: firebase.User | null
}

const Button: React.FunctionComponent<ButtonProps> = ({
  photoURL,
  text,
  uid,
  user,
}) => {
  const messageType = user && user.uid === uid ? 'sent' : 'received'

  return (
    <div className={messageType}>
      <img src={photoURL} alt='User Profile' />
      <p>{text}</p>
    </div>
  )
}

export default Button
