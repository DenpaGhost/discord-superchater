import { useRouter } from "next/router"
import { useEffect } from "react"

const index = () =>{
    const router = useRouter();
    useEffect(() => {
        const code = router.query.code;
        const state = router.query.state;

        if(code && state){
            
        }
    }, [router])
    return (<div>callback</div>)
}
export default index;