import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { parseQueryParameters } from "~/models/utilities/Utility";

const index = () => {
  const router = useRouter();
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    const queryString = router.asPath.substring(router.asPath.indexOf("#") + 1);
    const map = parseQueryParameters(queryString);
    setToken(map.get("access_token"));
  }, [router, setToken]);
  return (
    <>
      <div>callback</div>
      <div>{token}</div>
    </>
  );
};
export default index;
