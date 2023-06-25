import { Outlet } from "react-router-dom";
import CompanyNavigation from "../components/CompanyNavigation";

const CompanyRootLayout = () => {
  return (
    <>
      <CompanyNavigation />
      <Outlet />
    </>
  );
};

export default CompanyRootLayout;
