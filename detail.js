// Search with Id

const heroesList = document.getElementById('heroesList');
const heroDetail = document.getElementById('heroDetail');
const infoHome = document.getElementById('infoHome');

let selectedHeroId = JSON.parse(localStorage.getItem('selectedHeroId'));

console.log(selectedHeroId);

searchSuperheroes(selectedHeroId);

async function searchSuperheroes(id) {
    try {
        const response = await fetch(`https://superheroapi.com/api.php/6842651475855555/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayHeroes([data]); // Wrap the data into an array for consistency

    } catch (error) {
        console.error('Error:', error);
    }
}

function displayHeroes(heroes) {
    heroesList.innerHTML = '';
    heroDetail.innerHTML = '';

    heroes.forEach(hero => {
        const heroDiv = document.createElement('div');
        heroDiv.classList.add('hero');
        heroDiv.innerHTML = `
            <img src="${hero.image.url}" alt="${hero.name}" style="width:150px;height:200px;">
            <p>${hero.name}</p>
            
        `;

        heroDetail.innerHTML = `
            <p>Intelligence: ${hero.powerstats.intelligence}</p>
            <p>Strength: ${hero.powerstats.strength}</p>
    <p>Speed: ${hero.powerstats.speed}</p>
    <p>Durability: ${hero.powerstats.durability}</p>
    <p>Power: ${hero.powerstats.power}</p>
    <p>Combat: ${hero.powerstats.combat}</p>
    <p>Full Name: ${hero.biography['full-name']}</p>
    <p>Aliases: ${hero.biography.aliases.join(', ')}</p>
    <p>Place of Birth: ${hero.biography['place-of-birth']}</p>
    <p>First Appearance: ${hero.biography['first-appearance']}</p>
    <p>Publisher: ${hero.biography.publisher}</p>
    <p>Alignment: ${hero.biography.alignment}</p>
    <p>Gender: ${hero.appearance.gender}</p>
    <p>Race: ${hero.appearance.race}</p>
    <p>Height: ${hero.appearance.height.join(', ')}</p>
    <p>Weight: ${hero.appearance.weight.join(', ')}</p>
    <p>Eye Color: ${hero.appearance['eye-color']}</p>
    <p>Hair Color: ${hero.appearance['hair-color']}</p>
    <p>Occupation: ${hero.work.occupation}</p>
    <p>Base: ${hero.work.base}</p>
    <p>Group Affiliation: ${hero.connections['group-affiliation']}</p>
    <p>Relatives: ${hero.connections.relatives}</p>
            
        `;
        
        heroesList.appendChild(heroDiv);
    });
}

infoHome.addEventListener('click', function() {
  window.location.href = "./index.html";
});



// search With Name

// const heroesList = document.getElementById('heroesList');
// const heroDetail =document.getElementById ('heroDetail');

// let selectedHeroId = JSON.parse(localStorage.getItem('selectedHeroId'));


// console.log(selectedHeroId);

// searchSuperheroes(selectedHeroId);

// async function searchSuperheroes(name) {
//     try {
//       const response = await fetch(`https://superheroapi.com/api.php/6842651475855555/search/${name}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       displayHeroes(data.results);

//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }

//   function displayHeroes(heroes) {
//     heroesList.innerHTML = '';
//     heroes.forEach(hero => {
//       const heroDiv = document.createElement('div');
//       heroDiv.classList.add('hero');
//       heroDiv.innerHTML = `
//         <img src="${hero.image.url}" alt="${hero.name}" style="width:150px;height:200px;">
//         <p>${hero.name}</p>

//         <i class="bi bi-heart-fill addTo" (${hero.id})"></i>

//       `;
//       heroDetail.innerHTML = `
//       <p>Intelligence: ${hero.powerstats.intelligence}</p>
//       <p>Strength: ${hero.powerstats.strength}</p>
//       <p>Speed: ${hero.powerstats.speed}</p>
//       <p>Durability: ${hero.powerstats.durability}</p>
//       <p>Power: ${hero.powerstats.power}</p>
//       <p>Combat: ${hero.powerstats.combat}</p>
//       <p>Full Name: ${hero.biography['full-name']}</p>
//       <p>Aliases: ${hero.biography.aliases.join(', ')}</p>
//       <p>Place of Birth: ${hero.biography['place-of-birth']}</p>
//       <p>First Appearance: ${hero.biography['first-appearance']}</p>
//       <p>Publisher: ${hero.biography.publisher}</p>
//       <p>Alignment: ${hero.biography.alignment}</p>
//       <p>Gender: ${hero.appearance.gender}</p>
//       <p>Race: ${hero.appearance.race}</p>
//       <p>Height: ${hero.appearance.height.join(', ')}</p>
//       <p>Weight: ${hero.appearance.weight.join(', ')}</p>
//       <p>Eye Color: ${hero.appearance['eye-color']}</p>
//       <p>Hair Color: ${hero.appearance['hair-color']}</p>
//       <p>Occupation: ${hero.work.occupation}</p>
//       <p>Base: ${hero.work.base}</p>
//       <p>Group Affiliation: ${hero.connections['group-affiliation']}</p>
//       <p>Relatives: ${hero.connections.relatives}</p>
      
//       `;
//       heroesList.appendChild(heroDiv);
//       heroDetail.appendChild(heroDiv);
//     });
//   }












