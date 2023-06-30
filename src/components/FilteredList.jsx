

import React, { Component } from "react";
import Header from "./Header/Header";
import ItemList from "./ItemList";

class FilteredList extends Component {
  state = {};
  render() {
    const channelListFromStorage = JSON.parse(localStorage.getItem("channelList"));
    const {filterBy} =  this.props;
    window.scrollTo(0, 0);
    console.log('PAPAPAPAPAS');
    return (
      <main className="App">
        <Header />
        <ItemList channels={channelListFromStorage} filterBy={filterBy} sortItems={true}/>
      </main>
    );
  }
}

export default FilteredList;
