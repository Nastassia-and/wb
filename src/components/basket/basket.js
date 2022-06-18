export function openBasket() {
    let arr = [];
    const containerBasket = document.getElementsByClassName('container-baskets')[0];

    if (localStorage.getItem('basket')) {
        arr = JSON.parse(localStorage.getItem('basket')).slice(containerBasket.childElementCount);
    }

    arr.forEach(element => {
        const basketElement = document.createElement('div');
        basketElement.classList.add("basket");
        const spanName = document.createElement("span");
        spanName.classList.add("span1");
        spanName.textContent = element.name;
        basketElement.append(spanName);

        const spanPrice = document.createElement("span");
        spanPrice.textContent = element.price;
        basketElement.append(spanPrice);

        containerBasket.append(basketElement);
    });

    getSum();
}

function getSum() {
    let arr = [];

    if (localStorage.getItem('basket')) {
        arr = JSON.parse(localStorage.getItem('basket'));
    }

    document.getElementById('sum').textContent = arr.reduce((sum, item) => sum += item.price, 0);
}