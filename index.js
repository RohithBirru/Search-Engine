
const search = document.getElementById("searchform");
const searchbox = document.getElementById("box");
const results = document.getElementById("result");
const more = document.getElementById("searchmore");

let keyword = "";
let page= 1;
const accesskey= "";

async function searchImages() {
    keyword= searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;

    const response = await fetch(url);
    const data = await response.json();

    results.map(
        (result) => {
              const image = document.createElement("img");
              image.src= result.urls.small;
              const imagelink = document.createElement("a");
              imagelink.href=result.result.links.html;
              imagelink.target = "_blank";

              imagelink.appendChild(image);
              results.appendChild(imagelink);
        })
    console.log(data);
}

search.addEventListener("submit", (e) => {
    e.preventDefault();
    page=1;
    searchImages();
})