
document.body.style.backgroundColor = "silver";


document.getElementById("kiosk-title").style.color = "green";


var h3s = document.getElementsByTagName("h3");
for (let i = 0; i < h3s.length; i++) {
    h3s[i].style.textTransform = "uppercase";
}

var header = document.querySelector('header');

header.style.backgroundImage = "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')";
header.style.backgroundSize = "cover";      
header.style.backgroundPosition = "center"; 
header.style.backgroundRepeat = "no-repeat"; 
header.style.color = "white"; 

var fruitList = document.getElementById("fruit-list");
var newFruit = document.createElement("li");
newFruit.textContent = "Oranges";
fruitList.appendChild(newFruit);

var vegList = document.getElementById("vegetable-list");
var newVeg = document.createElement("li");
newVeg.textContent = "Spinach";
vegList.appendChild(newVeg);

function updateTime() {
    var now = new Date();
    document.getElementById("current-time").textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

document.getElementById("add-item-btn").onclick = function() {
    var fruit = prompt("Enter a new fruit:");
    if (fruit) {
        var li = document.createElement("li");
        li.textContent = fruit;
        fruitList.appendChild(li);
    }
    var veg = prompt("Enter a new vegetable:");
    if (veg) {
        var li2 = document.createElement("li");
        li2.textContent = veg;
        vegList.appendChild(li2);
    }
};

var searchBtn = document.getElementById("search-btn");
var searchInput = document.getElementById("search-input");

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
    var term = searchInput.value.toLowerCase();
    filterList("fruit-list", term);
    filterList("vegetable-list", term);
};

function filterList(listId, term) {
    var ul = document.getElementById(listId);
    var items = ul.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++) {
        if (items[i].textContent.toLowerCase().indexOf(term) !== -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}
function showAll() {
    filterList("fruit-list", "");
    filterList("vegetable-list", "");
}