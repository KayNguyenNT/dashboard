import { useEffect } from "react";
import { useRouter } from "next/router";

function Homepage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/app-admin/login");
  }, []);
}

export default Homepage;
