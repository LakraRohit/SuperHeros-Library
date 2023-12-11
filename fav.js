let heroesList = document.getElementById('heroesList');
let favhome  = document.getElementById('favhome');




const favListData = localStorage.getItem('favListData');
const favList = JSON.parse(favListData);

if (favList) {
  for (let i = 0; i < favList.length; i++) {
    searchSuperheroes(favList[i]); // Pass the hero ID to fetch data

    async function searchSuperheroes(heroId) {
      try {
        const response = await fetch(`https://superheroapi.com/api.php/6842651475855555/${heroId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayHeroes(data); // Display hero data
      } catch (error) {
        console.error('Error:', error);
      }
    }

    function displayHeroes(hero) {
      const heroDiv = document.createElement('div');
      heroDiv.classList.add('hero');
      heroDiv.innerHTML = `
      <img src="${hero.image.url}" alt="${hero.name}" style="width:150px;height:200px;">
      <p>${hero.name}</p>
        
        <i id ="trashBin" class="bi bi-trash3-fill" data-id="${hero.id}"></i>
      `;
      heroesList.appendChild(heroDiv);
    }
  }
  
}

//////////////////Home button  function///////////////////////////


const homeBtnBin = document.getElementById('homeBtnBin');
homeBtnBin.addEventListener('click', () => {
  heroesList.innerHTML = '';
  localStorage.clear();
});

favhome.addEventListener('click', function() {
  window.location.href = "./index.html";
});


///////////////////////Deleting function////////////////////////////////////





const newList = [];

// Event delegation for dynamically added trash bins
heroesList.addEventListener('click', function(event) {
  if (event.target.classList.contains('bi-trash3-fill')) {
    const trashBinId = event.target.dataset.id;
    console.log("clicked item - " + trashBinId); // Use the ID as needed
    // Perform actions with the obtained ID
    newList.push(trashBinId);
    console.log('newList - ' + newList);
      
  }

  const newList1 = favList.filter(item => !newList.includes(item));
  console.log('newList1 - ' + newList1);
  del(newList1);
});

function del(arr) {
  localStorage.setItem('favListData', JSON.stringify(arr));
  location.reload();
}
































// let updatedList = favList.filter(item => newList.includes(item));
// newList1.push(...updatedList)

// 



    








 