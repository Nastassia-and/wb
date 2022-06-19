export function openBasket() {
    let arr = [];
    const containerBasket = document.getElementsByClassName('container-baskets')[0];

    if (localStorage.getItem('basket')) {
        arr = JSON.parse(localStorage.getItem('basket')).slice(containerBasket.childElementCount);
    }

    arr.forEach(element => {
        const basketElement = document.createElement('div');
        basketElement.classList.add("basket");

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Esc";
        deleteButton.classList.add('deleteButton');

        deleteButton.addEventListener('click', () => {
            basketElement.remove();
            // localStorage.removeItem('basket');  ХЗ, как удалить из local определенный элемент
        });

        const spanName = document.createElement("span");
        spanName.classList.add("span");
        spanName.textContent = element.name;

        const spanPrice = document.createElement("span");
        spanPrice.textContent = (`${element.price} руб.`);

        basketElement.prepend(deleteButton, spanName, spanPrice);
        containerBasket.append(basketElement);

        document.getElementsByClassName('btn-secondary')[0].addEventListener('click', () => {
            localStorage.removeItem('basket');
            document.getElementsByClassName('container-baskets')[0].innerHTML = 'Корзина пуста';
            document.getElementById('sum').innerHTML = '0 руб.';
        });
    });

    getSum();
}

function getSum() {
    let arr = [];

    if (localStorage.getItem('basket')) {
        arr = JSON.parse(localStorage.getItem('basket'));
    }
    document.getElementById('sum').textContent = (`${arr.reduce((sum, item) => sum += item.price, 0)} руб.`);
}
