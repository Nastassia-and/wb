//карточка товара(добавляем картинкку, цену и название)
fetch('https://62a9a7c1ec36bf40bdbbaae2.mockapi.io/cards')
    .then((response) => response.json())
    .then((arr) => {
        arr.forEach(element => {
            const card = document.getElementById('card');
            const price = document.getElementById('price');
            const name = document.getElementById('name');
            
            card.style.backgroundImage = `url(${element.image})`;
            console.log("card.style", card.style);
            price.textContent = element.price;
            name.textContent = element.name;
        })
    })
    .catch(() => console.log('Error'))



    




