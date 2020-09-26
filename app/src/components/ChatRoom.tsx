import React, { useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

interface ChatRoomProps {
  messagesRef: firebase.firestore.CollectionReference
  getTimestamp: () => firebase.firestore.FieldValue
  user: firebase.User | null
}

const ChatRoom: React.FunctionComponent<ChatRoomProps> = ({
  messagesRef,
  getTimestamp,
  user,
}) => {
  const query = messagesRef.orderBy('createdAt').limit(25)

  const [messages] = useCollectionData(query, { idField: 'id' })

  const [newMessage, setNewMessage] = useState('')

  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (user) {
      const { uid, photoURL } = user

      await messagesRef.add({
        text: newMessage,
        createdAt: getTimestamp(),
        uid,
        photoURL,
      })

      setNewMessage('')
    }
  }

  return (
    <div>
      <main>
        {messages && messages.map((message: any) => <p>{message.text}</p>)}
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder='say something nice'
        />
        <button type='submit' disabled={!newMessage}>
          Send
        </button>
      </form>
    </div>
  )
}

export default ChatRoom
