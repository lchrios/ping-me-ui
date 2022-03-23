const ADMIN = 'ADMIN';
const LEADER = 'LEADER';
const SURVIVOR = 'SURVIVOR';

export const authRoles = {
    admin: [ADMIN], // Only SA & Admin has access
    leader: [ADMIN, LEADER], // can 1-1 or 1-X (his group) or 1-1 to other leaders
    survivor: [ADMIN, LEADER, SURVIVOR], // only can 1-1
}

// Check out app/views/dashboard/DashboardRoutes.js
// Only SA & Admin has dashboard access

// const dashboardRoutes = [
//   {
//     path: "/dashboard/analytics",
//     component: Analytics,
//     auth: authRoles.admin <===============
//   }
// ];

// Check navigaitons.js

// {
//   name: "Dashboard",
//   path: "/dashboard/analytics",
//   icon: "dashboard",
//   auth: authRoles.admin <=================
// }
