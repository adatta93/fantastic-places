const ACCESS_KEY =
  "baa2932e03c1069ffa4e6d5424afac276c3942158bcfbb8a2155cb6da38729db";
let keyword = "Neuschwanstein";
var url = `https://api.unsplash.com/search/photos?orientation=landscape&client_id=${ACCESS_KEY}&query=`;

export function getPhotosOfPlace(placeName) {
  return fetch(url + placeName)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data.results;
    });
}
