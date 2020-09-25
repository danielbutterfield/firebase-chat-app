import * as React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import './App.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Button from './components/Button'

firebase.initializeApp({
  // GitHub don't track my config!
})

const auth = firebase.auth()
const firestore = firebase.firestore()

const App: React.FunctionComponent = () => {
  const [user] = useAuthState(auth)

  const logIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  const logOut = () => {
    if (auth.currentUser) auth.signOut()
  }

  return (
    <div className='App'>
      <header>
        <h1>Chat Room</h1>
        {!user ? (
          <Button handleOnClick={logIn} buttonText='Log in with Google' />
        ) : (
          <Button handleOnClick={logOut} buttonText='Log out' />
        )}
      </header>
      <section>{/* Chat Room */}</section>
    </div>
  )
}

export default App
