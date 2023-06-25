import { json, defer, Await, useRouteLoaderData } from "react-router-dom";
import CompanyDetails from "../components/CompanyDetails";
import { Suspense } from "react";

const CompanyDetailsPage = () => {
  /**
   * getting data redurn by the loader
   */
  const { company } = useRouteLoaderData("company-details");

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
      <Await resolve={company}>
        {(loadedData) => <CompanyDetails companyDetails={loadedData} />}
      </Await>
    </Suspense>
  );
};

export default CompanyDetailsPage;

/**
 * fetching data through id
 */

export const loadCompanyData = async (id) => {
  try {
    const response = await fetch("http://localhost:8181/company/" + id);
    if (!response.ok) {
      return json({ message: "Could not fetch events." }, { status: 500 });
    } else {
      const responseData = await response.json();
      return responseData;
    }
  } catch (error) {
    console.log(error);
  }
};

export async function loader({ params }) {
  const id = params.companyId;
  return defer({
    company: await loadCompanyData(id),
  });
}
