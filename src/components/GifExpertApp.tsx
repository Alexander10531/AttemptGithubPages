// Esto se explica en el primer componentes. 
// La segunda importacion es para usar el componente AddCategory para enviar datos y renderizarlo desde este. 
import { useState } from "react";
import { AddCategory } from './AddCategory';
import GifGrid  from "./GiphyGrid";

export default function GifExpertApp(){

    // const categories : string[] = ['One Punch', 'Samurai X', 'Dragon Ball'];
    // Similar a la declaracion de una variable que usa el useState con la diferencia de que en este 
    // se esta usando un arreglo
    const [categories, setCategories] = useState(['Naruto']);
    // function handleAdd(){
    //     setCategories(cats => [...cats, 'Hunter X Hunter'])
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
                {
                    categories.map( (category : string) => 
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    )
                }
        </>
    )
}