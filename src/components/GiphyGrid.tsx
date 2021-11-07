import useFetchGifs  from '../hooks/useFetchGifs';        
// import { obtainGifs } from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";
export default function GifGrid({ category } : { category : any }){

    // const [gifs, setgifs] = useState([])


    const {data, loading} = useFetchGifs( category );
    
    return (
        <>
            <h3>{ category }</h3>
            {loading && 'Cargando...'}
            <div className="card-grid">
                {
                    data.map(item=> {
                        return <GifGridItem 
                            img={ item } 
                            key={ item['id'] }/>
                    })
                }
            </div>
        </>
    )
}