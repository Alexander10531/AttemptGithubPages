export async function obtainGifs( category : string){

    const requestOptions : RequestInit= {
        method: 'GET',
    };
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=655m9HK2nTG5N1GIBg7DRIP59xln1d47&q=${ encodeURI(category) }&limit=10`, requestOptions);
    let { data } = await response.json();
    const gifs = data.map( (img : any) => {
        return {
            id : img.id, 
            title: img.title, 
            url : img.images?.downsized_medium.url,
        }
    })

    return gifs;
}