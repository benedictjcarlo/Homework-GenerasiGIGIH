let btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", () => {
    alert("Data telah ditambahkan ;)")
});
  
const titleTxt = document.getElementById("card-description-title");
const artistTxt = document.getElementById("card-description-artist");
const albumTxt = document.getElementById("card-description-album");
const image = document.getElementById("image");

fetch(
    "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"
)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const { name, album, artists } = data;
  
      titleTxt.innerText = name;
      artistTxt.innerText = artists.map((artist) => `${artist.name} `);
      albumTxt.innerText = album.name;
      image.src = album.images[0].url;
    })
    .catch((error) => alert(error));