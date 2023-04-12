export const routes = [
  {
    path: "/",
    component: "dashboard-page",
    file: async () => {
      await import('./pages/Dashboard');
    }
  },
  {
    path: "/login",
    component: "login-page",
    file: async () => {
      await import('./pages/Login');
    }
  },
  {
    path: "/character/:id",
    component: "dashboard-details-page",
    file: async () => {
      await import('./pages/DashboardDetails');
    }
  },
]