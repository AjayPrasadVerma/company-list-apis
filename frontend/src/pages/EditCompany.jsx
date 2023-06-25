import CompanyForm from "../components/CompanyForm";
import { useRouteLoaderData } from "react-router-dom";

const EditCompanyPage = () => {
  const data = useRouteLoaderData("company-details");
  const companyData = data.company;

  return <CompanyForm companyData={companyData} method="put" />;
};

export default EditCompanyPage;
