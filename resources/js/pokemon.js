// fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
// .then(response => response.json())
// .then(pokemon => {
//     const pokemonGo = document.querySelector('.pokemon');
//     let cards = showCards(pokemon);
//     pokemonGo.innerHTML = cards;
// })
// .catch(error => console.error('Error fetching data:', error));

// function showCards(pokemon) {
//     return `<div class="card w-[180px] my-3 h-auto border-2 bg-violet-400">
//                 <div class="card-body p-1 text-center">
//                     <img src="${pokemon.sprites.front_default}" class="mx-auto">
//                     <h4 class="text-white">${pokemon.name}</h4>
//                 </div>
//             </div>`;
// }

const inputSearch = document.querySelector('.input-keyword');
let allPokemon = []; // Store all fetched Pokémon

// Fetch and store all Pokémon when the page loads
async function fetchAllPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=210&offset=0');
        const data = await response.json();
        const pokemonList = data.results;

        // Fetch details for all Pokémon
        allPokemon = await Promise.all(pokemonList.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
        }));

        // Show all Pokémon initially
        showCards(allPokemon);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Show Pokémon cards based on the provided list
function showCards(pokemonList) {
    const pokemonGo = document.querySelector('.pokemon');
    const cards = pokemonList.map(pokemon => createCard(pokemon)).join('');
    pokemonGo.innerHTML = cards;
}

// Create a Pokémon card HTML
function createCard(pokemon) {
    return `<div class="card w-[220px] sm:w-[130px] md:w-[160px] my-3 h-auto border-2 border-violet-300 bg-transparent cursor-pointer hover:bg-gray-200">
                <div class="card-header p-1 text-white">
                    <small class="text-gray-500 font-normal float-start">#${pokemon.id}</small>
                </div>
                <div class="card-body p-1 text-center">
                    <img src="${pokemon.sprites.front_default}" class="mx-auto" alt="${pokemon.name}">
                    <h4 class="text-black font-semibold text-lg">${pokemon.name}</h4>
                    <small class="text-gray-500 font-medium">${pokemon.types[0].type.name}</small>
                </div>
            </div>`;
}

// Event listener for search input
inputSearch.addEventListener('keyup', (event) => {
    const query = event.target.value.toLowerCase();
    const filteredPokemon = allPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(query));
    showCards(filteredPokemon);
});

// Fetch and display all Pokémon initially
fetchAllPokemon();

// SEARCH
const search = document.querySelector('.search');
const inputKey = document.querySelector('.input-keyword');


search.addEventListener('click', () => {
    inputKey.style.transition = '';
    inputKey.classList.remove('hidden');
});