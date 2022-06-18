import Fuse from 'fuse.js'

function search() {
    const input = document.getElementById('input').value;
    const options = {
        includeScore: true,
        keys: ['name'],
    }

    fetch('https://62a9a7c1ec36bf40bdbbaae2.mockapi.io/cards')
        .then((response) => response.json())
        .then((arr) => {
            const fuse = new Fuse(arr, options);
            const result = fuse.search(input);
            const ids = result.map(item => ++item.refIndex);
            const cards = [...document.getElementsByClassName('bestsellers__card')];

            cards.forEach(card => {
                if (!ids.length) {
                    card.style.display = "block";
                    return;
                }

                if (ids.find((id) => id == card.id)) {
                    card.style.display = "block";
                    return;
                }

                card.style.display = "none";
            });
        })
}

export { search };