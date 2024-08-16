import { createBrowserRouter } from "react-router-dom";
import { Login, Home, Profile, Dashboard, ErrorPage } from "../pages";
import { NotFoundPage } from "../pages/NotFoundPage/index.";


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
    element: <Dashboard />,
    errorElement: <ErrorPage />
  },
  {
    path: '/notFound',
    element: <NotFoundPage />,
    errorElement: <ErrorPage />
  }
])