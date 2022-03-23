import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import AppContext from './contexts/AppContext'
import history from '../history.js'
import routes from './RootRoutes'
//import { Provider } from 'react-redux'
//import { Store } from './redux/Store'
import { GlobalCss, PingMeSuspense, PingMeTheme, PingMeLayout } from './components'
import sessionRoutes from './views/sessions/SessionRoutes'
import AuthGuard from './auth/AuthGuard'
import { AuthProvider } from './contexts/FirebaseAuthContext'
import { SettingsProvider } from './contexts/SettingsContext'

const App = () => {


    return (
        <AppContext.Provider value={{ routes }}>
            {/*<Provider store={Store}> */}
                <SettingsProvider>
                    <PingMeTheme>
                        <GlobalCss />
                        <Router history={history}>
                            <AuthProvider>
                                <PingMeSuspense>
                                    <Routes>
                                        {/* AUTHENTICATION PAGES (SIGNIN, SIGNUP ETC.) */}
                                        {sessionRoutes.map((item, i) => (
                                            <Route
                                                key={i}
                                                path={item.path}
                                                component={item.component}
                                            />
                                        ))}
                                        {/* AUTH PROTECTED DASHBOARD PAGES */}
                                        <AuthGuard>
                                            <PingMeLayout />{' '}
                                            {/* RETURNS <Layout1/> component */}
                                        </AuthGuard>
                                    </Routes>
                                </PingMeSuspense>
                            </AuthProvider>
                        </Router>
                    </PingMeTheme>
                </SettingsProvider>
            {/*</Provider>*/}
        </AppContext.Provider>
    )
}

export default App;
