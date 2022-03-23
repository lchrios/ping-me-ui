import React, { createContext, useState } from 'react'

import { merge } from 'lodash'

import { PingMeLayoutSettings } from '../components/PingMeLayout/settings'

const SettingsContext = createContext({
    settings: PingMeLayoutSettings,
    updateSettings: () => {},
})

export const SettingsProvider = ({ settings, children }) => {
    const [currentSettings, setCurrentSettings] = useState(
        settings || PingMeLayoutSettings
    )

    const handleUpdateSettings = (update = {}) => {
        const marged = merge({}, currentSettings, update)
        setCurrentSettings(marged)
    }

    return (
        <SettingsContext.Provider
            value={{
                settings: currentSettings,
                updateSettings: handleUpdateSettings,
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsContext
