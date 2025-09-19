import React, { Component } from 'react';

import "./App.css";
import Header from "./components/Header/Header";
import ItemList from "./components/ItemList";

class App extends Component {
  render() {
    const channelListFromStorage = JSON.parse(localStorage.getItem("channelList"));
    return (
      <main className="App">
        <Header />
        <ItemList channels={channelListFromStorage} sortItems={false}/>
      </main>
    );
  }
}

export default App;
