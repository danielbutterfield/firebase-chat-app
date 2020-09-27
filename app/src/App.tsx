import * as React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import './App.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import Button from './components/Button'
import ChatRoom from './components/ChatRoom'

firebase.initializeApp({
  // GitHub don't track my config!
})

const auth = firebase.auth()
const firestore = firebase.firestore()

const App: React.FunctionComponent = () => {
  const [user] = useAuthState(auth)
  const messagesRef = firestore.collection('messages')

  const logIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  const logOut = () => {
    if (auth.currentUser) auth.signOut()
  }

  const getTimestamp = () => firebase.firestore.FieldValue.serverTimestamp()

  return (
    <div className='App'>
      <header>
        <h1>Chat Room App</h1>
        {!user ? (
          <Button handleOnClick={logIn} buttonText='Log in with Google' />
        ) : (
          <Button handleOnClick={logOut} buttonText='Log out' />
        )}
      </header>
      <section>
        {!user ? (
          <p>Sign in to gain access.</p>
        ) : (
          <ChatRoom
            getTimestamp={getTimestamp}
            messagesRef={messagesRef}
            user={auth.currentUser}
          />
        )}
      </section>
    </div>
  )
}

export default App
