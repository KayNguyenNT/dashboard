import Companies from "@/components/companies/companies";
import LayoutPart from "@/components/layout/layout";

const CompaniesPage = () => {
  return <Companies />;
};

export default CompaniesPage;

//Lay lay out ve

CompaniesPage.getLayout = function getLayout(page) {
  return <LayoutPart>{page}</LayoutPart>;
};
