const baseURl = process.env.REACT_APP_BASE_URL;
const apikey = process.env.REACT_APP_API_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const fetchComics = async () => {
    let url = `${baseURl}/v1/public/comics?ts=1&apikey=${apikey}&hash=${privateKey}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        return data.data.results;
    } catch (err) {
        console.log(err);
        return;
    }
};

const fetchCharacter = async () => {
    let url = `${baseURl}/v1/public/characters?ts=1&apikey=${apikey}&hash=${privateKey}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        return data.data.results;
    } catch (err) {
        console.log(err);
        return;
    }
};

const fetchGetOneComic = async (id) => {
    let url = `${baseURl}/v1/public/comics/${id}?ts=1&apikey=${apikey}&hash=${privateKey}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        return data.data.results;
    } catch (err) {
        console.log(err);
        return;
    }
};

const fetchGetListCharOfComic = async (id) => {
    let url = `${baseURl}/v1/public/comics/${id}/characters?ts=1&apikey=${apikey}&hash=${privateKey}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        return data.data.results;
    } catch (err) {
        console.log(err);
        return;
    }
};

export { fetchComics, fetchCharacter, fetchGetOneComic, fetchGetListCharOfComic };
