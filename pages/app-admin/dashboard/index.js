import LayoutPart from "@/components/layout/layout";

function DashboardPage() {}

export default DashboardPage;

DashboardPage.getLayout = function getLayout(page) {
  return <LayoutPart>{page}</LayoutPart>;
};
