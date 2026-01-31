let img = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let input = document.getElementById("t");
let loader = document.getElementById("loader");

function getimg(){
    let text = input.value.trim();
    if(text === "") return alert("اكتب وصف للصورة");

    loader.style.display = "block";

    img.style.opacity = 0;
    img2.style.opacity = 0;
    img3.style.opacity = 0;

    let url = `http://fi8.bot-hosting.net:20163/elos-img?text=${encodeURIComponent(text)}`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        img.src = data.url;
        img.onload = () => img.style.opacity = 1;
    });

    fetch(url)
    .then(res => res.json())
    .then(data => {
        img2.src = data.url;
        img2.onload = () => img2.style.opacity = 1;
    });

    fetch(url)
    .then(res => res.json())
    .then(data => {
        img3.src = data.url;
        img3.onload = () => {
          img3.style.opacity = 1;
          loader.style.display = "none";
        };
    });

    input.value = "";
}