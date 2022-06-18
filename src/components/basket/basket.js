export function openBasket() {
    let arr = [];

    if (localStorage.getItem('basket')) {
        arr = JSON.parse(localStorage.getItem('basket'));
    }

    arr.forEach(element => {
        const containerBasket = document.getElementsByClassName('container-baskets')[0];

        const basketElement = document.createElement('div');
        basketElement.classList.add("basket");
        const span = document.createElement("span");
        span.textContent = element.name;
        basketElement.append(span);

        // const cardName = document.createElement("span");
        // cardName.classList.add("bestsellers__card-name");

        containerBasket.append(basketElement)

        // const bestsellers__card = document.createElement('div');
        // bestsellers__card.classList.add("bestsellers__card");

        // const card_conrainer = document.createElement('div');
        // card_conrainer.classList.add("bestsellers__card-container");
        // card_conrainer.style.backgroundImage = `url(${element.image})`;

        // const bestsellersCardButton = document.createElement("button");
        // bestsellersCardButton.innerHTML = "Быстрый просмотр";
        // bestsellersCardButton.classList.add('bestsellers__card-view');

        // const card_wrapper = document.createElement('div');
        // card_wrapper.classList.add("bestsellers__card-wrapper");

        // const bestsellersCardSale = document.createElement("span");
        // bestsellersCardSale.classList.add('bestsellers__sale');
        // bestsellersCardSale.innerHTML = Math.floor(Math.random() * 100);

        // const buyButton = document.createElement("button");
        // buyButton.innerHTML = "Купить";
        // buyButton.classList.add(`bestsellers__buy`);

        // buyButton.addEventListener('click', () => {
        //     basket.push(element);
        //     localStorage.setItem('basket', basket);
        //     newPrice.innerHTML;
        // });

        // const card_info = document.createElement('div');
        // card_info.classList.add("bestsellers__card-info");

        // const card_price = document.createElement('div');
        // card_price.classList.add("bestsellers__card-price");

        // const newPrice = document.createElement("span");
        // newPrice.classList.add("bestsellers__new-price");
        // newPrice.innerHTML = Math.floor(Math.random() * 100);

        // const oldPrice = document.createElement("span");
        // oldPrice.classList.add('bestsellers__old-price');
        // oldPrice.innerHTML = element.price * 100;

        // const cardName = document.createElement("span");
        // cardName.classList.add("bestsellers__card-name");

        // cards.append(bestsellers__card);
        // bestsellers__card.append(card_conrainer, card_info);
        // card_conrainer.append(bestsellersCardButton, card_wrapper);
        // card_wrapper.append(bestsellersCardSale, buyButton);
        // card_info.append(card_price, cardName);
        // card_price.append(newPrice, oldPrice);
    })
}
