import axios from 'axios'

const BASE_URL = 'http://localhost:8080';

const ingredientsService = {

    fetchIngredients: () => {
        return axios.get(`${BASE_URL}/ingredients`);
    },
    addIngredient: (ingredient) => {
        return axios.post(`${BASE_URL}/ingredients`, ingredient);
    },
    editIngredient: (ingredient) => {
        return axios.patch(`${BASE_URL}/ingredients/${ingredient.name}`, ingredient);
    },
    getIngredient: (name) => {
        return axios.get(`${BASE_URL}/ingredients/${name}`)
    },
    deleteIngredient: (name) => {
        return axios.delete(`${BASE_URL}/ingredients/${name}`);
    },
    getPizzas: (name) => {
        console.log(`${BASE_URL}/ingredients/${name}/pizzas`);
        return axios.get(`${BASE_URL}/ingredients/${name}/pizzas`);
    }
};

export default ingredientsService;
