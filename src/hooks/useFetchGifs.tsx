import { useEffect, useState } from "react";
import { obtainGifs } from "../helpers/getGifs";

export default function useFetchGifs( category : string ){
    const [state, setState] = useState({
        data: [],
        loading : true,
    })

    useEffect(() => {
        obtainGifs(category)
            .then(imgs => {
                setTimeout(() => {
                    setState({
                        data : imgs,
                        loading : false,
                    })
                }, 2000)
            }) 
    }, [category])


    return state;
}