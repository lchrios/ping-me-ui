import React, { createContext, useEffect, useReducer } from 'react'
import { getAuth, signInWithEmailAndPassword }from 'firebase/auth'
import { PingMeLoading } from '../components'
import app from '../services/firebase'

const auth = getAuth()

const initialAuthState = {
    isAuthenticated: false,
    isInitialised: false,
    user: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FB_AUTH_STATE_CHANGED': {
            const { isAuthenticated, user } = action.payload

            return {
                ...state,
                isAuthenticated,
                isInitialised: true,
                user,
            }
        }
        default: {
            return { ...state }
        }
    }
}

const AuthContext = createContext({
    ...initialAuthState,
    method: 'FIREBASE',
    createUser: () => Promise.resolve(),
    signIn: () => Promise.resolve(),
    logout: () => Promise.resolve(),
})

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialAuthState)

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(email, password)
    }


    const createUser = async (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const logout = () => {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch({
                    type: 'FB_AUTH_STATE_CHANGED',
                    payload: {
                        isAuthenticated: true,
                        user: {
                            id: user.uid,
                            name: user.displayName || user.email,
                            avatar: user.photoURL,
                            email: user.email,
                        },
                    },
                })
            } else {
                dispatch({
                    type: 'FB_AUTH_STATE_CHANGED',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                })
            }
        })

        return unsubscribe
    }, [dispatch])

    if (!state.isInitialised) {
        return <PingMeLoading />
    }

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'FIREBASE',
                createUser,
                signIn,
                signIn,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
