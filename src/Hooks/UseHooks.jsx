import { useEffect } from "react"

const useHooks = title => {
    useEffect(()=>{
        document.title = `${title} - Car Toy House`;
    },[title])
}
export default useHooks;