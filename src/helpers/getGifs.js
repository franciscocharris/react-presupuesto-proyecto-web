// por tener el async esto devuelve una promesa que resuelve las imagenes buscadas
export const getGifs = async( category ) => {
    const url =  `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }h&limit=10&api_key=L4saCvYJG6aNCs7xDeFNxOPT85megiqR`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( (img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    console.log(gifs);

    return gifs;
}