import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
const index = () => {
  const router = useRouter();
  const [clientId] = useState(process.env.DISCORD_CLIENT_ID);
  const [callbackUri] = useState(process.env.DISCORD_OAUTH_CALLBACK_URI);

  useEffect(() => {
    const callback = encodeURIComponent(callbackUri);
    const uri = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${callback}&response_type=token&scope=guilds%20messages.read`;
    router.replace(uri);
  }, [router, clientId, callbackUri]);

  return <div>redirecting...</div>;
};
export default index;
