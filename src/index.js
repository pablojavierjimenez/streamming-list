import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import channelList from "./db/channels";
import App from "./App";
import Favorites from "./components/Favorites";
import FilteredList from "./components/FilteredList";

const root = ReactDOM.createRoot(document.getElementById("root"));

let actualWebVersion = Math.floor(Math.random() * 10000); // 20250428
let actualWebVersionFromStorage = JSON.parse(localStorage.getItem("actualWebVersion"));

if (actualWebVersion === actualWebVersionFromStorage) {
  console.log('no hay una nueva version');
} else {
  console.log('hay una version nueva limpio la lista vieja y pongo la nueva');
  console.log("no existe se agrega");
  channelList.forEach( (item, index) => item.id = index +1);
  localStorage.setItem("channelList", JSON.stringify(channelList));
  localStorage.setItem("actualWebVersion", JSON.stringify(actualWebVersion));
}



const haveIPreexistingFavorites =
  localStorage.getItem("FavoritesChannels") &&
  JSON.parse(localStorage.getItem("FavoritesChannels")).length >= 1
    ? true
    : false;
if (!haveIPreexistingFavorites) {
  localStorage.setItem("FavoritesChannels", JSON.stringify([]));
}

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="subcription" element={<FilteredList filterBy="subscripcion"/>} />
      <Route path="gratis" element={<FilteredList   filterBy="gratis"/>} />
      <Route path="argentinos" element={<FilteredList  filterBy="argentino"/>} />

      <Route path="favoritos" element={<Favorites filterBy="favorito"/>} />
      <Route path="musica" element={<FilteredList  filterBy="musica"/>} />
      <Route path="animacion" element={<FilteredList  filterBy="animacion"/>} />      
      <Route path="en-espaniol" element={<FilteredList  filterBy="in-spanish" />} />
      <Route path="deporte" element={<FilteredList  filterBy="deporte" />} />
      <Route path="tv-en-vivo" element={<FilteredList  filterBy="tv-en-vivo" />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
