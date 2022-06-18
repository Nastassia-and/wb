import result from './components/cards/createcards';
import { openBasket } from './components/basket/basket';
import { search } from './components/search/search.js';

const inputSearch = document.getElementById('input');
document.getElementById('basket').addEventListener('click', openBasket);
inputSearch.addEventListener('input', search);