import React, { createContext, useContext, useState, useEffect } from 'react'
import firebase from '../lib/firebase/firebase'
import { GoogleAuthProvider } from 'firebase/auth'

interface contextProps {
  user: firebase.User | null
  loading: boolean
  signOut: () => Promise<void>
  signWithGoogle: () => Promise<void>
}

const AuthContext = createContext<contextProps>({
  user: null,
  loading: true,
  signOut: async () => {
    return
  },
  signWithGoogle: async () => {
    return
  },
})

export const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<firebase.User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
      setUser(user)

      if (user == null) setLoading(false)
    })
  }, [])

  const signOut = async () => {
    await firebase.auth().signOut()
  }

  const signWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    await firebase.auth().signInWithPopup(provider)
  }

  return user !== null ? (
    <AuthContext.Provider value={{ user, loading, signOut, signWithGoogle }}>
      {children}
    </AuthContext.Provider>
  ) : (
    <div
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button onClick={() => signWithGoogle()}>Sign with google</button>
    </div>
  )
}

export default AuthProvider
