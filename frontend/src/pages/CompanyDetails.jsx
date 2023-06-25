import {
  json,
  defer,
  Await,
  useRouteLoaderData,
  redirect,
} from "react-router-dom";
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
      return json({ message: "Could not fetch data." }, { status: 500 });
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

/**
 * delete Api
 */

export const action = async ({ request, params }) => {
  const id = params.companyId;

  const response = await fetch("http://localhost:8181/company/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }
  return redirect("/company");
};
