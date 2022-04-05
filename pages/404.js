import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NotFound = () => {
    const route = useRouter();
    useEffect(() => {
        setTimeout(() => {
            route.push('/');
        },3000)
    },[])

    return (
        <div className="not-found">
            <h1>Ooops..</h1>
            <p>The page is not available</p>
            <p>You will be redirected in 3 seconds...</p>
        </div>
    );
}
 
export default NotFound;