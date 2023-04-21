import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/layout/layout";

function Homepage() {
  useEffect(() => {
    router.push("/app-admin");
  }, []);
  return <></>;
}

export default Homepage;

Homepage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
