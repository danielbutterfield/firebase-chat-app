import * as React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import './App.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  // GitHub don't track my config!
})

const auth = firebase.auth()
const firestore = firebase.firestore()

const App: React.FunctionComponent = () => {
  const [user] = useAuthState(auth)

  return (
    <div className='App'>
      <h1>Chat Room</h1>
      <div>{user ? 'Logged In' : 'Logged Out'}</div>
    </div>
  )
}

export default App
