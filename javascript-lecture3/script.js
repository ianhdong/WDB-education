var photoElement= document.getElementById("apod");
var title = document.getElementById("title");
var body = document.getElementById("body");
fetch("https://api.nasa.gov/planetary/apod?api_key=UhFkQeA320zUzwe2zJ3FZ5fN3lofhjJzeNaKYH05").then(
    (response) => response.json()
).then(
    (data) => {
        console.log(data);
        photoElement.setAttribute("src", data.url);
        title.innerHTML = data.title;
        body.innerHTML = data.explanation;
    }
)
fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=Ct7DRBwgrTycP0lmNYZ2AxB3Ixl3YoC7FeWjee1s").then(
    (response) => response.json()
).then(
    (data) => {
        console.log(data[0]);
    }
)