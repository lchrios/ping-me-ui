import React from 'react'
import { Navigate } from 'react-router-dom'

import dashboardRoutes from './views/dashboard/DashboardRoutes'
import inboxRoute from './views/inbox/InboxRoutes'
import chatRoutes from './views/chat-box/ChatRoutes'

// import materialRoutes from './views/material-kit/MaterialRoutes'
// import chartsRoute from './views/charts/ChartsRoute'
// import dragAndDropRoute from './views/Drag&Drop/DragAndDropRoute'
// import invoiceRoutes from './views/invoice/InvoioceRoutes'
// import calendarRoutes from './views/calendar/CalendarRoutes'
// import crudRoute from './views/CRUD/CrudRoutes'
// import formsRoutes from './views/forms/FormsRoutes'
// import mapRoutes from './views/map/MapRoutes'
// import todoRoutes from './views/todo/TodoRoutes'
// import pageLayoutRoutes from './views/page-layouts/PageLayoutRoutees'
// import ListRoute from './views/list/ListRoute'

// import pricingRoutes from './views/pricing/PricingRoutes'
// import scrumBoardRoutes from './views/scrum-board/ScrumBoardRoutes'
// import ecommerceRoutes from './views/ecommerce/EcommerceRoutes'
// import pagesRoutes from './views/pages/pagesRoutes'
// import dataTableRoutes from './views/data-table/dataTableRoutes'

const redirectRoute = [
    {
        path: '/',
        exact: true,
        component: () => <Navigate to={{pathname:"/dashboard/default"}} />,
    },
]

const errorRoute = [
    {
        component: () => <Navigate to={{pathname: "/session/404"}} />,
    },
]

const routes = [
    ...dashboardRoutes,
    ...inboxRoute,
    ...chatRoutes,
    ...redirectRoute,
    ...errorRoute,
    // ...materialRoutes,
    // ...chartsRoute,
    // ...dragAndDropRoute,
    // ...calendarRoutes,
    // ...invoiceRoutes,
    // ...crudRoute,
    // ...formsRoutes,
    // ...mapRoutes,
    // ...todoRoutes,
    // ...scrumBoardRoutes,
    // ...ecommerceRoutes,
    // ...pageLayoutRoutes,
    // ...pricingRoutes,
    // ...ListRoute,
    // ...pagesRoutes,
    // ...dataTableRoutes,
]

export default routes
