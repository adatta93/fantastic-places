import { useEffect, useState } from "react";
import "./App.css";
import { getPhotosOfPlace } from "./DataService";

function App() {
  const [picList, setPicList] = useState([]);
  const [keyword, setKeyword] = useState("Neuschwanstein");

  useEffect(() => {
    async function loadPhotos() {
      let photos = await getPhotosOfPlace(keyword);
      console.log(photos);
      setPicList(photos);
    }
    loadPhotos();
  }, [keyword]);

  return (
    <>
      <h1>Photos of - {keyword}</h1>
      <input value={keyword} onChange={(ev) => setKeyword(ev.target.value)} />
      <div>
        {picList &&
          picList.map((pic) => (
            <div key={pic.id}>
              <span>{pic.description}</span>
              <img alt={pic.alt_description} src={pic.urls.regular} />
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
