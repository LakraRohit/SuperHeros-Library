const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const heroesList = document.getElementById('heroesList');
const favorites = document.getElementById('favorites');
let favList = [];

searchBtn.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  searchSuperheroes(searchTerm);
});

async function searchSuperheroes(name) {
  try {
    const response = await fetch(`https://superheroapi.com/api.php/6842651475855555/search/${name}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayHeroes(data.results);
    addToFav(data.results);
    supInfo(data.results);
  } catch (error) {
    console.error('Error:', error);
  }
}

function displayHeroes(heroes) {
  heroesList.innerHTML = '';
  heroes.forEach(hero => {
    const heroDiv = document.createElement('div');
    heroDiv.classList.add('hero');
    heroDiv.innerHTML = `
      <img src="${hero.image.url}" alt="${hero.name}" style="width:150px;height:200px;">
      <p>${hero.name}</p>
      <i class="bi bi-info-circle-fill" (${hero.id})"></i>
      <i class="bi bi-heart-fill addTo" (${hero.id})"></i>
    `;
    heroesList.appendChild(heroDiv);
  });
}




/////////////////////////Adding to FavList///////////////////////////////////////////


function addToFav(heroId) {
  const addTo = document.querySelectorAll('.bi.bi-heart-fill.addTo');
  addTo.forEach((element, index) => {
    const id = heroId[index].id;
    // const id = heroId[index].name;// for passing name in local storage
    element.addEventListener('click', () => {
      if (!favList.includes(id)) {
        console.log(id); // Log the id of the clicked hero
        favList.push(id);
        localStorage.setItem('favListData', JSON.stringify(favList));
        alert('Sup added to FavList');

        // Add a class to change the color or style of the heart icon
        element.classList.add('addedToFav');
      } else {
        alert('Sup already exists in the FavList');
      }
    });
  });
}





function supInfo(heroId) {
  const info = document.querySelectorAll('.bi.bi-info-circle-fill');
  info.forEach((e, index) => {
    const infoId = heroId[index].id;
    e.addEventListener('click', () => {
      console.log(infoId);
      localStorage.setItem('selectedHeroId', JSON.stringify(infoId)); // Store only the clicked hero's ID
      window.open('./detail.html');
    });
  });
}




favorites.addEventListener('click', function(){
  window.open("./fav.html");
})














