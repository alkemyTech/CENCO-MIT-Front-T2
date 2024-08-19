import { createBrowserRouter } from "react-router-dom";
import { Login, Dashboard, NotFoundPage, ErrorPage } from "../pages";

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <ErrorPage />
  },
  {
    path: '*',
    element: <NotFoundPage />,
    errorElement: <ErrorPage />
  }

])