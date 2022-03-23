import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import PingMeCssVars from './PingMeCssVars'
import useSettings from '../../hooks/useSettings'


const PingMeTheme = ({ children }) => {
    const { settings } = useSettings()
    let activeTheme = { ...settings.themes[settings.activeTheme] }
    console.log(activeTheme)

    return (
        <ThemeProvider theme={activeTheme}>
            <CssBaseline />
            <PingMeCssVars> {children} </PingMeCssVars>
        </ThemeProvider>
    )
}

export default PingMeTheme
