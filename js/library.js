// MINI HTTP LIBRARY 
class API {
    constructor() {
        // this.baseURL = 'https://www.themealdb.com/api/json/v1/1';
        this.baseURL = '';
    }
    baseURL(url) {
        this.baseURL = url;
    }
    getBaseURL() {
        return this.baseURL;
    }
    endpoint(url) {
        return this.baseURL !== "" ? `${this.baseUrl}/${url}` : url;
    }
    async get(url) {
        return await fetch(this.endpoint(url)).then(response => {
            return response.json();
        });
    }
    async post(url) {
        return await fetch(this.endpoint(url)).then(response => response.json());
    }
}
// UI Class 
class UI {
    renderFoods(foods) {
        const foodsDiv = document.getElementById('foods');
        if (foods != null) {
            foods.map(food => {
                const foodDiv = document.createElement('div');
                foodDiv.className = 'col-md-3';
                const foodInfo = `
                        <div onclick="displayDetails('${food.idMeal}')" class="border rounded text-center h-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img class="img-fluid rounded-top" src="${food.strMealThumb}" alt="">
                        <h4 class="h5 py-4 px-2 mb-0">${food.strMeal}</h4>
                        </div>
                    `;
                foodDiv.innerHTML = foodInfo;
                foodsDiv.appendChild(foodDiv);
            });
        } else {
            warning.style.display = 'block';
        }
    };
    renderFoodInfo(food) {
        const foodDetailsDiv = document.getElementById('foodsDetails');

        foodDetailsDiv.innerHTML = `
            <img class="img-fluid rounded mb-4" src="${food.strMealThumb}" alt="">
            <h4>${food.strMeal}</h4>
            
            <h5 class="pt-3 pb-2"><i class="icon-fire icons"></i> Ingredients</h5>
            <ul class="list-unstyled mb-0">
                <li><i class="icon-check icons"></i>${food.strMeasure1}, ${food.strIngredient1}</li>
                <li><i class="icon-check icons"></i>${food.strMeasure2}, ${food.strIngredient2}</li>
                <li><i class="icon-check icons"></i>${food.strMeasure3}, ${food.strIngredient3}</li>
                <li><i class="icon-check icons"></i>${food.strMeasure4}, ${food.strIngredient4}</li>
            </ul>
        `;
    };
}