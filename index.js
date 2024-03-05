const jokeContainer = document.querySelector("#joke");
const btn = document.getElementById("generate");
const language = document.querySelector("#language");
const loading = document.querySelector(".option2");
//const loading = document.getElementsByClassName("option2");
const result = document.querySelector(".option1");
console.log(loading);
console.log(language.value);
const urlEng = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";
const urlHin = "https://hindi-jokes-api.onrender.com/jokes?api_key=4a160d0499f1efc3c39203f9ba7c";

// language.addEventListener("click", () => {
//     console.log(language.value);
// })

async function checkHin() {
    //jokeContainer.classList.remove("fade");
    result.classList.remove("active");
    loading.classList.add("active");
    if (loading.classList.contains("active")) {
        jokeContainer.style.display = "none";
        console.log("if");
    }


    try {
        const res = await fetch(urlHin);
        const data = await res.json();
        loading.classList.remove("active");
        if (!(loading.classList.contains("active"))) {
            jokeContainer.style.display = "flex";
            console.log("else if");
        }
        jokeContainer.textContent = data.jokeContent;

        result.classList.add("fade");
        console.log("test");
        result.classList.add("active");
    }
    catch (err) {

    }
}

async function checkEng() {
    //jokeContainer.classList.remove("fade");
    result.classList.remove("active");
    loading.classList.add("active");
    if (loading.classList.contains("active")) {
        jokeContainer.style.display = "none";
        console.log("if");
    }
    try {
        const res = await fetch(urlEng);
        const data = await res.json();
        loading.classList.remove("active");
        if (!(loading.classList.contains("active"))) {
            jokeContainer.style.display = "flex";
            console.log("else if");
        }
        jokeContainer.textContent = data.joke;
        result.classList.add("fade");
        console.log("test");
        result.classList.add("active");
    }
    catch (err) {


    }

    //jokeContainer.classList.add("fade");

}



// let getJokeHin = () => {
//     jokeContainer.classList.remove("fade");
//     fetch(urlHin)
//         .then(data => data.json())
//         .then(item => {
//             console.log(item);
//             jokeContainer.textContent = item.jokeContent;
//             jokeContainer.classList.add("fade");

//         });
// }


// let getJokeEng = () => {
//     jokeContainer.classList.remove("fade");
//     fetch(urlEng)
//         .then(data => data.json())
//         .then(item => {
//             console.log(item);
//             jokeContainer.textContent = item.joke;
//             jokeContainer.classList.add("fade");
//         });
// }
console.log("check", language.value);


btn.addEventListener("click", () => {
    if (language.value === "english") {
        console.log("Eng");
        console.log("check", language.value);
        checkEng();
    }
    if (language.value === "hindi") {
        console.log("hin");
        console.log("check", language.value);
        checkHin();
    }

})

checkEng();

