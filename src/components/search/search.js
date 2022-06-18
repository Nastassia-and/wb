import Fuse from 'fuse.js'

function search() {
    console.log('search');
    const input = document.getElementById('input').value;
    const options = {
        includeScore: true,
        keys: ['name']
    }

    fetch('https://62a9a7c1ec36bf40bdbbaae2.mockapi.io/cards')
        .then((response) => response.json())
        .then((arr) => {
            const fuse = new Fuse(arr, options)
            const result = fuse.search(input)
            console.log(result);
        })   
}

export { search };







