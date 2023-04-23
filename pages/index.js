import { useEffect } from "react";
import Layout from "@/components/layout/layout";
import { useRouter } from "next/router";

function Homepage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/app-admin");
  }, []);
  return <div>This site is loading....</div>;
}

export default Homepage;
