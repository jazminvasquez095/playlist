console.log("js console");
let data;
let grid = document.querySelector(".grid-container");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(xhttp.responseText);
        console.log(data);

        data.forEach(function(movie) {
            let card = document.createElement("div");
            card.classList.add("card");
            
            let textData =
                "<div class='movietitle'>" + movie.title + "</div>" +
                "<span>" +
                "Genres:" + movie.genres + "<br>" +
                "Cast:" + movie.cast;
            card.innerHTML = textData;

            if (movie.imgSrc) {
                card.style.backgroundImage = "url(" + movie.imgSrc + ")";
            }
            grid.appendChild(card);
        });
    }
};

xhttp.open("GET", "movies-2020s.json", true);
xhttp.send();

let usernameInput = document.getElementById("username");
let colorThemeInput = document.getElementById("theme-color");
let storageLocationInput = document.getElementById("storage-choice");
//you will need to store the .value of variables above into new variables made below
const settingsForm = document.querySelector("#settings-form");
const saveButton = document.getElementsByTagName("button");

console.log(usernameInput);
console.log(colorThemeInput);
console.log(storageLocationInput);
console.log(settingsForm);
console.log(saveButton);

settingsForm.addEventListener("submit",function(e){
  e.preventDefault();
  
  let usernameInput = inputVariableusernameinput .value;
  let themecolorInput = inputVariablethemecolorinput.value;
  let savesettingsInput = inputVariablesavesettingsinput.value;
})