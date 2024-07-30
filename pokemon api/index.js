document.getElementById('fetchButton').addEventListener('click', async () => {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const image = document.getElementById('pokemonSprite');

    if (pokemonName) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            if (!response.ok) throw new Error('Pokémon not found');

            const data = await response.json();
            image.src = data.sprites.front_default;
            
            // Ensure the image starts hidden, then show it
            image.classList.remove('show');
            // Trigger a reflow to restart the animation
            image.offsetHeight; 
            image.classList.add('show');
        } catch (error) {
            console.error(error);
            alert('Pokémon not found or an error occurred.');
        }
    } else {
        alert('Please enter a Pokémon name.');
    }
});
