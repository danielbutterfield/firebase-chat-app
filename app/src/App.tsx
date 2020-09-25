import * as React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import './App.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const App: React.FunctionComponent = () => {
  return <div className='App'>Chat Room</div>
}

export default App
