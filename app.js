'use strict';
const data_container = document.getElementById('foods');
const searchBtn = document.getElementById('searchBtn');
const warning = document.getElementById('warning');

const http = new API();
const ui = new UI();

function handleSearch() {
    const keyword = document.getElementById('keyword').value;
    data_container.innerHTML = '';
    if (keyword === '') {
        warning.style.display = 'block';
    } else {
        getAllFood(keyword);
        warning.style.display = 'none';
    }
}
async function getAllFood(mealName) {
    const {meals} = await http.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
    ui.renderFoods(meals);
}

async function displayDetails(name) {
    const data = await http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`);
    ui.renderFoodInfo(data.meals[0]);
}

searchBtn.addEventListener('click', handleSearch);
