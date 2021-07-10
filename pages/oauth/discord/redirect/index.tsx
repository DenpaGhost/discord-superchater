import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { createState } from "@/models/auth/AuthRepository";
const index = ()=>{
    const router = useRouter();
    const [clientId, setClientId] = useState(process.env.DISCORD_CLIENT_ID);
    const [callbackUri, setCallbackUri] = useState(process.env.DISCORD_OAUTH_CALLBACK_URI);

    useEffect(()=>{
        const state = createState(24)
        localStorage.setItem('state', state);
        const callback = encodeURIComponent(callbackUri)
        const uri = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${callback}&response_type=code&scope=guilds%20messages.read&state=${state}`
        router.replace(uri)
    },[router, clientId, callbackUri])

    return (
        <div>redirecting...</div>
    )
}  
export default index;