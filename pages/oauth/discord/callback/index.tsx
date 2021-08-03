import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import guilds from "~/apiResources/discord/guilds";
import { parseQueryParameters } from "~/models/utilities/Utility";

const index = () => {
  const router = useRouter();
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    const queryString = router.asPath.substring(router.asPath.indexOf("#") + 1);
    const map = parseQueryParameters(queryString);
    setToken(map.get("access_token"));

    guilds.index(token).then((res) => console.dir(res));
  }, [router, setToken, token]);
  return (
    <>
      <div>callback</div>
      <div>{token}</div>
    </>
  );
};
export default index;
