import React from 'react'
import { PingMeLayouts } from './index'
import { PingMeSuspense } from '../../components'
import useSettings from '../../hooks/useSettings'

const PingMeLayout = (props) => {
    const { settings } = useSettings()
    const Layout = PingMeLayouts[settings.activeLayout]

    return (
        <PingMeSuspense>
            <Layout {...props} />
        </PingMeSuspense>
    )
}

export default PingMeLayout
