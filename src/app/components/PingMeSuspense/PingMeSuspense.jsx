import React, { Suspense } from 'react'
import { PingMeLoading } from '../../components'

const PingMeSuspense = ({ children }) => {  
    return <Suspense fallback={<PingMeLoading />}>{children}</Suspense>
}

export default PingMeSuspense
