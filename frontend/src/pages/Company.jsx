import { json, defer, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import CompanyList from "../components/CompanyList";

const CompanyPage = () => {
  /**
   * accessing the data return by the loader
   * here er get the promise data
   */
  const { companyList } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
      <Await resolve={companyList}>
        {(resloveData) => <CompanyList conpamyList={resloveData} />}
      </Await>
    </Suspense>
  );
};

export default CompanyPage;

/**
 * @description
 * fetching the company data
 *
 */

export const loadCompanyData = async () => {
  try {
    const response = await fetch("http://localhost:8181/company");
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

/**
 * returning the data to the useLoaderData() as a promis
 */

export function loader() {
  return defer({
    companyList: loadCompanyData(),
  });
}
