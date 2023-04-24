import ReportComponent from "@/components/report/report";
import LayoutPart from "@/components/layout/layout";
import axios from "axios";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";

function ReportsPage({ dataPost, context }) {
  const router = useRouter();
  console.log(context);
  return (
    <>
      <ReportComponent dataPost={dataPost} />
      <button onClick={() => router.prefetch("/app-admin/companies")}>
        Click me
      </button>
      <button onClick={() => router.reload()}>Reload</button>
      <button onClick={() => router.back()}>Back</button>
    </>
  );
}

export default ReportsPage;

ReportsPage.getLayout = function getLayout(page) {
  return <LayoutPart>{page}</LayoutPart>;
};

/* export async function getStaticProps(context) {
  let data = (await axios.get("https://jsonplaceholder.typicode.com/posts"))
    .data;
  console.log(context);

  return {
    props: {
      dataPost: data,
    },
    revalidate: 60,
    notFound: true,
    redirect: {
      destination: "/no-data",
    },
  };
}
 */

ReportsPage.getInitialProps = async (ctx) => {
  let data = (await axios.get("https://jsonplaceholder.typicode.com/posts"))
    .data;
  return { dataPost: data, context: ctx.pathname };
};

/* export async function getServerSideProps(ctx) {
  let data = (await axios.get("https://jsonplaceholder.typicode.com/posts"))
    .data;
  return {
    props: {
      dataPost: data,
      context: ctx.resolvedUrl,
    },
  };
} */
