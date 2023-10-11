var characterIds = prompt("Por favor, ingrese los IDs de los personajes separados por coma (,):");

//console.log(characterIds)

fetchCharacters(characterIds);

function fetchCharacters(ids) {
    fetch(`https://rickandmortyapi.com/api/character/${ids}`)
        .then(response => response.json())
        .then(data => {
            // cómo no se si es un id o varios, creo o la variable y el array            
            const characters = Array.isArray(data) ? data : [data];
            displayCharacters(characters);
            console.log(characters)
        });
        
}

function displayCharacters(characters) {
    const gridContainer = document.getElementById("characterGrid");
    
    characters.forEach(character => {
        const characterCard = document.createElement("section");
        characterCard.classList.add("character-card");

        const characterImage = document.createElement("img");
        characterImage.classList.add("character-image");
        characterImage.src = character.image;

        const characterName = document.createElement("section");
        characterName.classList.add("character-name");
        characterName.textContent = character.name;

        characterCard.appendChild(characterImage);
        characterCard.appendChild(characterName);
        gridContainer.appendChild(characterCard);
    });
}

