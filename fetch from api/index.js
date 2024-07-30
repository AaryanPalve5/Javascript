/***
 * fetch
 * 
 * function used for making http requests to fetch resources.
 * (JSON style data,images,files)
 * 
 * Simplifies asynchronous data fetching in JS and used for interacting 
 * with APIs to retrieve and send data asynchronously over the web
 * 
 * fetch(url,{options})
 * 
 * options : get,post,dele (adv stuff ig)
 */

/*
    fetch("https://pokeapi.co/api/v2/pokemon/di")
    .then(response => response.json() )
    .then(data => console.log(data.name) )
    .catch(error => console.error(error))*/

    function fetchData() {
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Could not fetch Pokémon data");
                }
                return response.json();
            })
            .then(data => {
                // Update the page with the fetched data
                document.getElementById('pokemonName').value = data.name; // Display the Pokémon name
                const spriteElement = document.getElementById('pokemonSprite');
                spriteElement.src = data.sprites.front_default; // Set the sprite URL
                spriteElement.style.display = 'block'; // Make the image visible
            })
            .catch(error => console.error('Error:', error));
    }
    
    // Make sure fetchData is attached to the button click
    document.querySelector('button').addEventListener('click', fetchData);
    