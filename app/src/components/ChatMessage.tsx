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
      <img
        alt='User Profile'
        className='profile'
        src={
          photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'
        }
      />
      <p>{text}</p>
    </div>
  )
}

export default Button
