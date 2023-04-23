import LayoutPart from "@/components/layout/layout";
import StagesComponent from "@/components/stages/stages";
import { data } from "autoprefixer";
import axios from "axios";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function StagesPage() {
  /*   const fetcher = (url) => axios.get(url).then((res) => res.data);
   */

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  return (
    <>
      <StagesComponent dataUser={data} />
    </>
  );
}

export default StagesPage;

export async function getStaticProps() {
  return {
    props: {
      dataUser: data,
    },
  };
}

StagesPage.getLayout = function getLayout(page) {
  return <LayoutPart>{page}</LayoutPart>;
};
