import { createBrowserRouter } from "react-router-dom";
import { Login, Home, Profile, Dashboard, ErrorPage, } from "../pages";
import { DashboardUser } from "../components/DashboardUser";


export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/profile',
    element: <Profile />,
    errorElement: <ErrorPage />
  },
  {
    path: '/dashboard',
    element: <DashboardUser />,
    errorElement: <ErrorPage />
  }

])