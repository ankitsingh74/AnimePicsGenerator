const btnEl = document.getElementById("btn");

const animeContainerEl = document.querySelector(".anime-container")

const animeImgEl = document.querySelector(".anime-img")

const animeNameEl = document.querySelector(".anime-name")

const apiURL="https://api.catboys.com/img"


btnEl.addEventListener("click", async function(){
try {
    animeImgEl.src = "spinner.svg"
    btnEl.disabled = true;
    btnEl.innerText = "Loading..."
    animeNameEl.innerText= "Updating..."
   
    const response = await fetch(apiURL)
    const data = await response.json()
    animeContainerEl.style.display = "block";
    animeImgEl.src = data.url
    animeNameEl.innerText = data.artist;
    
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
} catch (error) {
    console.log(error);
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    animeImgEl.src = "spinner.svg"
    animeNameEl.innerText = "An error happend, Please try again"
}
})
