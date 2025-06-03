
document.body.style.fontFamily = "'Quicksand', Arial, sans-serif";


document.body.style.backgroundColor = "silver";

document.getElementById("kiosk-title").style.color = "green";

let header = document.querySelector("header");
header.style.background = "linear-gradient(90deg, #e0ffe0 0%, #ffe0e0 100%)";
header.style.textAlign = "center";
header.style.padding = "30px 0";
header.style.borderRadius = "0 0 18px 18px";


let h3s = document.getElementsByTagName("h3");
for (let i = 0; i < h3s.length; i++) {
    h3s[i].style.textTransform = "uppercase";
}
 let main = document.querySelector("main");
main.style.width = "950px";           
main.style.margin = "30px auto";    
main.style.background = "#f8f8ff";   
main.style.borderRadius = "16px";
main.style.boxShadow = "0 2px 10px rgba(0,0,0,0.07)";
main.style.padding = "24px";
 



let fruitList = document.getElementById("fruit-list");
let newFruit = document.createElement("li");
newFruit.textContent = "Oranges";
fruitList.appendChild(newFruit);


let vegList = document.getElementById("vegetable-list");
let newVeg = document.createElement("li");
newVeg.textContent = "Spinach";
vegList.appendChild(newVeg);

let fruitImages = {
    "Mangoes": "https://safiorganics.co.ke/wp-content/uploads/2024/12/miyazaki-mango-plant.webp",
    "Bananas": "https://www.nipponexpress.com/press/report/img/06-Nov-20-1.jpeg",
    "Water Melons": "https://i.pinimg.com/736x/f5/52/25/f5522551c5a750869e2453979df67264.jpg",
    "Oranges": "https://images.unsplash.com/photo-1502741338009-cac2772e18bc"
};
let vegImages = {
    "Onions": "https://image.tuasaude.com/media/article/ru/ny/beneficios-da-cebola_39481.jpg",
    "Tomatoes": "https://www.clickandgrow.com/cdn/shop/products/Mini_Tomato_plant_1200x960_8fcb2bf0-c1da-42fe-9c3d-058b43954f4e.jpg?v=1596113620",
    "Kales": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAVc6H2Z120G5fc4i2wpir-mx874O7rIbbiA&s",
    "Spinach": "https://www.plantsofdistinction.co.uk/stock/mweb/img002860.jpg"
};

function addImagesToList(listId, imagesObj) {
    let ul = document.getElementById(listId);
    ul.style.display = "flex";
    ul.style.flexDirection = "column";
    ul.style.padding = "0";


    let items = ul.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
        let text = items[i].textContent.trim();

        if (imagesObj[text] && !items[i].querySelector("img")) {
            let img = document.createElement("img");
            img.src = imagesObj[text];
            img.alt = text;
            img.style.width = "48px";
            img.style.height = "48px";
            img.style.objectFit = "cover";
            img.style.borderRadius = "50%";
            img.style.marginLeft = "18px";
            img.style.boxShadow = "0 2px 7px rgba(0,0,0,0.10)";
            items[i].appendChild(img);
        }

        items[i].style.display = "flex";
        items[i].style.marginBottom = "18px";
        items[i].style.background = "#fff";
        items[i].style.padding = "12px 30px";
        items[i].style.borderRadius = "14px";
        items[i].style.fontSize = "1.15em";
        items[i].style.fontWeight = "500";
        items[i].style.minWidth = "230px";
        items[i].style.boxShadow = "0 1px 8px rgba(0,0,0,0.08)";
        items[i].style.gap = "18px";
    }
}

window.onload = function() {
    addImagesToList("fruit-list", fruitImages);
    addImagesToList("vegetable-list", vegImages);
}

function updateTime() {
    let now = new Date();
    document.getElementById("current-time").textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();


document.getElementById("add-item-btn").onclick = function() {
    let fruit = prompt("Enter a new fruit:");
    if (fruit) {
        let li = document.createElement("li");
        li.textContent = fruit;
        fruitList.appendChild(li);
        addImagesToList("fruit-list", fruitImages);
          }
    let veg = prompt("Enter a new vegetable:");
    if (veg) {
        let li2 = document.createElement("li");
        li2.textContent = veg;
        vegList.appendChild(li2);
        addImagesToList("vegetable-list", vegImages); 
    }
};


let searchBtn = document.getElementById("search-btn");
let searchInput = document.getElementById("search-input");

searchBtn.onclick = function() {
    if (searchInput.style.display === "none") {
        searchInput.style.display = "inline";
        searchInput.focus();
    } else {
        searchInput.style.display = "none";
        searchInput.value = "";
        showAll();
    }
};

searchInput.onkeyup = function() {
    let term = searchInput.value.toLowerCase();
    filterList("fruit-list", term);
    filterList("vegetable-list", term);
};

function filterList(listId, term) {
    let ul = document.getElementById(listId);
    let items = ul.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.toLowerCase().indexOf(term) !== -1) {
            items[i].style.display = "flex";
        } else {
            items[i].style.display = "none";
        }
    }
}
function showAll() {
    filterList("fruit-list", "");
    filterList("vegetable-list", "");
}