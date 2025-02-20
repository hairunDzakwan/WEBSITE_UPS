import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function useAuth() {
    const router=useRouter()
    useEffect(()=>{
        const token=localStorage.getItem('auth_token')
        if(!token){
            router.push('/login')
        }
    },[router])
      
}