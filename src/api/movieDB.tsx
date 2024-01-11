import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '96e609f6b9e7c2434c358fdab39d40ee',
        language: 'es-ES',
    },
});

export default movieDB;
