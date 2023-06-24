import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import CompanyListPage from "./pages/CompanyList";
import NewCompanyPage from "./pages/NewCompany";
import EditCompanyPage from "./pages/EditCompany";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/company", element: <CompanyListPage /> },
      { path: "/new", element: <NewCompanyPage /> },
      { path: "/edit", element: <EditCompanyPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
