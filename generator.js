function addCar() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;

    if(brand == '' || model == '' || year == '' || name == ''){
        alert('Заполните все поля!')
    } else {
        const carInfo = `ФИО: ${brand} ${name} 
        \nПочта: ${year} 
        \nНаивменование услуги: ${model}`;
        const listItem = createCarItem(carInfo);

        document.getElementById('car-list').appendChild(listItem);

        updateLocalStorage(carInfo);

        const carEmpty = document.getElementById("empty");
        if (!carEmpty.classList.contains('apply__empty_active')) {
            carEmpty.classList.add('apply__empty_active');
        }

        clearInputFields();
    }
}

function createCarItem(carInfo) {
    const listItem = document.createElement('div');
    listItem.classList.add('apply__item');
    listItem.textContent = carInfo;
    return listItem;
}

function updateLocalStorage(carInfo) {
    const cars = JSON.parse(localStorage.getItem('cars')) || [];
    cars.push(carInfo);
    localStorage.setItem('cars', JSON.stringify(cars));
}

function clearInputFields() {
    document.getElementById('brand').value = '';
    document.getElementById('model').value = '';
    document.getElementById('year').value = '';
    document.getElementById('name').value = '';
}

function deleteCars() {
    localStorage.removeItem('cars');

    let carList = document.getElementsByClassName('apply__item');
    let carlistArr = Array.from(carList);
    carlistArr.forEach((item) => {
        item.remove();
    });

    const carEmpty = document.getElementById("empty");
    if (carEmpty.classList.contains('apply__empty_active')) {
        carEmpty.classList.remove('apply__empty_active');
    }
}

function initializeCarList() {
    const cars = JSON.parse(localStorage.getItem('cars')) || [];
    const carList = document.getElementById('car-list');

    if (cars.length) {
        document.getElementById("empty").classList.add('apply__empty_active');
    }

    cars.forEach(function (carInfo) {
        const listItem = createCarItem(carInfo);
        carList.appendChild(listItem);
    });
}

const form = document.getElementById('form');
form.onsubmit = function (event) {
    event.preventDefault();
    addCar();
};

const deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener("click", deleteCars);

window.onload = initializeCarList;
