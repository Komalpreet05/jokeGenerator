const jokeContainer = document.querySelector("#joke");
const btn = document.getElementById("generate");
const language = document.querySelector("#language");
console.log(language.value);
const urlEng = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";
const urlHin = "https://hindi-jokes-api.onrender.com/jokes?api_key=4a160d0499f1efc3c39203f9ba7c";

// language.addEventListener("click", () => {
//     console.log(language.value);
// })

let getJokeHin = () => {
    jokeContainer.classList.remove("fade");
    fetch(urlHin)
        .then(data => data.json())
        .then(item => {
            console.log(item);
            jokeContainer.textContent = item.jokeContent;
            jokeContainer.classList.add("fade");
        });
}


let getJokeEng = () => {
    jokeContainer.classList.remove("fade");
    fetch(urlEng)
        .then(data => data.json())
        .then(item => {
            console.log(item);
            jokeContainer.textContent = item.joke;
            jokeContainer.classList.add("fade");
        });
}
console.log("check", language.value);


btn.addEventListener("click", () => {
    if (language.value === "english") {
        console.log("Eng");
        console.log("check", language.value);
        getJokeEng();
    }
    if (language.value === "hindi") {
        console.log("hin");
        console.log("check", language.value);
        getJokeHin();
    }

})

