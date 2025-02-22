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
    <div className="overscroll-contain bg-slate-100 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2210%22 height=%2210%22 viewBox=%220 0 10 10%22%3E%3Cpath d=%22M0 0h10v10H0z%22 fill=%22none%22 stroke=%22black%22 stroke-width=%221%22/%3E%3C/svg%3E')]">
      <RouterProvider router={router} />
      <ScreenSizeIndicator />
    </div>
  )
}