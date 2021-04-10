const API_KEY = '4721358-13c427133c953f3e48d1d506d';
const PER_PAGE = 12;
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;

const fetchAPI = (query = '', page = 1) => {
  return fetch(`${BASE_URL}&q=${query}&page=${page}`)
    .then(data => data.json())
    .then(({ hits }) => hits);
};

export default fetchAPI;
