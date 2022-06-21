//карточка товара(добавляем картинкку, цену и название)
let result;
let basket = [];

if (localStorage.getItem("basket")) {
    basket = JSON.parse(localStorage.getItem("basket"));
} else {
    localStorage.setItem('basket', JSON.stringify([]));
}


fetch('https://62a9a7c1ec36bf40bdbbaae2.mockapi.io/cards')
    .then((response) => response.json())
    .then((arr) => {
        result = arr;
        const cards = document.getElementById('cards');

        arr.forEach(element => {
            const bestsellers__card = document.createElement('div');
            bestsellers__card.id = element.id;
            bestsellers__card.classList.add("bestsellers__card");

            const card_conrainer = document.createElement('div');
            card_conrainer.classList.add("bestsellers__card-container");
            card_conrainer.style.backgroundImage = `url(${element.image})`;

            const bestsellersCardButton = document.createElement("button");
            bestsellersCardButton.innerHTML = "Быстрый просмотр";
            bestsellersCardButton.classList.add('bestsellers__card-view');
            bestsellersCardButton.classList.add('btn');
            bestsellersCardButton.classList.add('btn-primary');

            bestsellersCardButton.addEventListener('click', () => {
                bestsellersCardButton.setAttribute('type','button');
                bestsellersCardButton.setAttribute('data-bs-toggle','modal');
                bestsellersCardButton.setAttribute('data-bs-target','#exampleModal1');
    
                const modal_img = document.getElementById('modal-img');
                modal_img.setAttribute("src", element.image);
    
            });
            
            const card_wrapper = document.createElement('div');
            card_wrapper.classList.add("bestsellers__card-wrapper");

            const bestsellersCardSale = document.createElement("span");
            bestsellersCardSale.classList.add('bestsellers__sale');
            bestsellersCardSale.innerHTML = `${Math.floor(Math.random() * 40)}%`;

            const buyButton = document.createElement("button");
            buyButton.innerHTML = "Купить";
            buyButton.classList.add(`bestsellers__buy`);

            buyButton.addEventListener('click', () => {
                basket = JSON.parse(localStorage.getItem("basket"));
                basket.push(element);
                localStorage.setItem('basket', JSON.stringify(basket));
                newPrice.innerHTML;
            });

            const card_info = document.createElement('div');
            card_info.classList.add("bestsellers__card-info");

            const card_price = document.createElement('div');
            card_price.classList.add("bestsellers__card-price");

            const newPrice = document.createElement("span");
            newPrice.classList.add("bestsellers__new-price");
            newPrice.innerHTML = element.price;


            const oldPrice = document.createElement("span");
            oldPrice.classList.add('bestsellers__old-price');
            oldPrice.innerHTML = `${(Math.floor(Math.random() * 1000))}`;

            const cardName = document.createElement("span");
            cardName.classList.add("bestsellers__card-name");

            const nameCard = document.createElement('span');
            nameCard.classList.add("spanCard");
            nameCard.innerHTML = element.name;

            cards.append(bestsellers__card);
            bestsellers__card.append(card_conrainer, card_info, nameCard);
            card_conrainer.append(bestsellersCardButton, card_wrapper);
            card_wrapper.append(bestsellersCardSale, buyButton);
            card_info.append(card_price, cardName);
            card_price.append(newPrice, oldPrice);

        })
    })
    
    .catch(() => console.log('Error'))

export default result;