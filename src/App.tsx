import { createBrowserRouter, RouterProvider } from "react-router";
import DashboardLayout from "./layouts/dashboard/dashboard-layout";
import Fallback from "./components/fallback";
import Home from "./pages/dashboard/home/home";
import ScreenSizeIndicator from "./dev/screen-size-indicator";

export default function App(){
  const router = createBrowserRouter([
    {
      path: "",
      Component: DashboardLayout,
      HydrateFallback: Fallback,
      children: [
        {
          path: "",
          Component: Home,
          HydrateFallback: Fallback
        }
      ]
    }
  ])
  return (
    <div className="overscroll-contain">
      <RouterProvider router={router} />
      <ScreenSizeIndicator />
    </div>
  )
}