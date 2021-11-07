import { IImage as imageGif } from "../interfaces"


export default function GifGridItem({ img } : { img : imageGif}){
    

    return(
        <div
            className="card">
            <img 
                src={ img.url } 
                alt={img.title}/>
            <p>{ img.title }</p>
        </div>  
    )
}