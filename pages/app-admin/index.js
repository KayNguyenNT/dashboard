import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Homepage() {
  const [user, getUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/app-admin/companies");
    } else router.push("/app-admin/login");
  }, []);
}

export default Homepage;
