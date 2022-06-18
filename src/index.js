import result from './components/cards/createcards';
import { search } from './components/search/search.js';
const inputSearch = document.getElementById('input');
console.log('inputSearch', inputSearch);
console.log('function', search);
inputSearch.addEventListener('input', search);
