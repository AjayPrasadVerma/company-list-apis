import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import CompanyPage, { loader as companyLoader } from "./pages/Company";
import NewCompanyPage from "./pages/NewCompany";
import EditCompanyPage from "./pages/EditCompany";
import RootLayout from "./pages/Root";
import CompanyRootLayout from "./pages/CompanyRoot";
import CompanyDetailsPage, {
  loader as companyDetailsLoader,
} from "./pages/CompanyDetails";
import { action as manuplateCompanyAction } from "./components/CompanyForm";

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
          {
            index: true,
            element: <CompanyPage />,
            loader: companyLoader,
          },
          {
            path: ":companyId",
            id: "company-details",
            loader: companyDetailsLoader,
            children: [
              { index: true, element: <CompanyDetailsPage /> },
              { path: "edit", element: <EditCompanyPage /> },
            ],
          },
          { path: "edit", element: <EditCompanyPage /> },
          {
            path: "new",
            element: <NewCompanyPage />,
            action: manuplateCompanyAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
