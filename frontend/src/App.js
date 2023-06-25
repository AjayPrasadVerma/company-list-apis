import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import CompanyListPage from "./pages/CompanyList";
import NewCompanyPage from "./pages/NewCompany";
import EditCompanyPage from "./pages/EditCompany";
import RootLayout from "./pages/Root";
import CompanyRootLayout from "./pages/CompanyRoot";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "company",
        element: <CompanyRootLayout />,
        children: [
          { index: true, element: <CompanyListPage /> },
          { path: "edit", element: <EditCompanyPage /> },
          { path: "new", element: <NewCompanyPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
