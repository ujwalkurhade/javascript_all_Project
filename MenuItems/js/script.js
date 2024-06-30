let orgData;
let count = 1;
 

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    processJSONData(data);
    orgData = data;

  })

  .catch(error => console.error('Error fetching JSON:', error));

function processJSONData(data) {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML = " ";

  data.forEach(item => {
    const card = document.createElement('div');

    card.classList.add('card');
    card.innerHTML = `

      <h2>${item.prodName}</h2>
      <img src="${item.produrl}" alt="${item.prodName}" style="max-width: 100%;"  >
      <p>${item.prodDesc}</p>
      <p>Price: $${item.prodPrice}</p>
  
         `;
    cardContainer.appendChild(card);
  });
}



// Display All Items based on Filter 



function displayAll(showItems) {

  console.log(showItems);


  const cardContainer = document.querySelector('.card-container');

  cardContainer.innerHTML = " ";

  orgData.forEach(item => {

    if (showItems == 'all')

    {
      const card = document.createElement('div');

      card.classList.add('card');
      card.innerHTML = `

      <h2>${item.prodName}</h2>
      <img src="${item.produrl}" alt="${item.prodName}" style="max-width: 100%;"  >
      <p>${item.prodDesc}</p>
      <p>Price: $${item.prodPrice}</p>
  
         `;
      cardContainer.appendChild(card);

    } else if (item.gender == showItems) {
      const card = document.createElement('div');

      card.classList.add('card');
      card.innerHTML = `

      <h2>${item.prodName}</h2>
      <img src="${item.produrl}" alt="${item.prodName}" style="max-width: 100%;"  >
      <p>${item.prodDesc}</p>
      <p>Price: $${item.prodPrice}</p>
  
         `;
      cardContainer.appendChild(card);
    } else if (item.gender == showItems) {


      const card = document.createElement('div');

      card.classList.add('card');
      card.innerHTML = `

      <h2>${item.prodName}</h2>
      <img src="${item.produrl}" alt="${item.prodName}" style="max-width: 100%;"  >
      <p>${item.prodDesc}</p>
      <p>Price: $${item.prodPrice}</p>
  
         `;
      cardContainer.appendChild(card);

    } else {
      console.log("");
    }

  });



}




// Add Card Model


let urlProd, prodName,prodDesc,prodPrice



function cardModel() {

  document.querySelector(".main_container").style = "opacity:0.4";
  document.querySelector(".form-container").style = "display:block;";

}


function submitCard() {

    urlProd = document.querySelector("#photo").value.trim();
    prodName = document.querySelector("#name").value.trim();
    prodDesc = document.querySelector("#description").value.trim();
  prodPrice = document.querySelector("#price").value.trim();



  if (urlProd === "" || prodName === "" || prodDesc === "" || prodPrice === "") {
    alert("Please fill all fields first.");
    return;  
  }


  // Generate newly  Card


 



  const cardContainer = document.querySelector('.card-contain');

  const card = document.createElement('div');

  card.classList.add('card');
  card.innerHTML = `

      <h2>${prodName}</h2>
      <img src="${urlProd}" alt="${prodName}" style="max-width: 100%;"  >
      <p>${prodDesc}</p>
    <p> Price: $  <span id="priceQty"> ${prodPrice}</span> </p>


      <button onclick="subtractQty()"> - </button>
    <span id="countSpan">${count}</span>
    <button onclick="addQty()"> + </button>

         `;

         

        
  cardContainer.appendChild(card);

  document.querySelector(".main_container").style = "opacity:1";
  document.querySelector(".form-container").style = "display:none;";



  // Set Blank Fields 
  document.querySelector("#photo").value = "";
  document.querySelector("#name").value = "";
  document.querySelector("#description").value = "";
  document.querySelector("#price").value = "";



  document.querySelector(".main_container").style = "opacity:1";
  document.querySelector(".form-container").style = "display:none;";



}



function addQty() {
  count++;
  document.getElementById('countSpan').textContent = count; // Update count in the card

   
  document.querySelector('#priceQty').textContent = ` ${count * prodPrice}`;  


}

 

function subtractQty() {
  if (count > 0) {
    count--;
    document.getElementById('countSpan').textContent = count; // Update count in the card
    
   
    document.querySelector('#priceQty').textContent = ` ${count * prodPrice}`;  
 
  }
 
}



// Seraching Item Filter 


function searchItem() {
  let inputVal = document.querySelector(".serachBar").value;

  console.log(inputVal);
  // Filter the data based on the input value
  let saveEle = orgData.filter((element) => {
      // Convert both the product name and input value to lowercase for case-insensitive comparison
      return element.prodName.toLowerCase().includes(inputVal);
  });

  // Display the filtered results (for demonstration, you might want to adjust how you display it)
  displayResults(saveEle);
}

function displayResults(results) {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML = " ";

  results.forEach((item) => {
    const card = document.createElement('div');

    card.classList.add('card');
    card.innerHTML = `

      <h2>${item.prodName}</h2>
      <img src="${item.produrl}" alt="${item.prodName}" style="max-width: 100%;"  >
      <p>${item.prodDesc}</p>
      <p>Price: $${item.prodPrice}</p>
  
         `;
      cardContainer.appendChild(card);
  });
}






































function cancelCard() {
  document.querySelector("#photo").value = "";
  document.querySelector("#name").value = "";
  document.querySelector("#description").value = "";
  document.querySelector("#price").value = "";



  document.querySelector(".main_container").style = "opacity:1";
  document.querySelector(".form-container").style = "display:none;";



}