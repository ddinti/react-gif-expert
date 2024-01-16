
export const  getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9fnyd6ZCbQ8jK572z8nJ5IYKZJlalgAJ&q=${ category }&limit=10&rating=r`;

    const resp = await fetch( url );
    
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }
    )); 
    
    return gifs;

}