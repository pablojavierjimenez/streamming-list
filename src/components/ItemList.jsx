import React, { Component } from "react";
import ChannelItem from "./ChannelItem/ChannelItem";

const styles = {
  container: {
    minHeight: "calc(100vh - 89px)",
    paddingTop: "89px",
    paddingBottom: "89px",
    alignItems: "flex-start",
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "center",
  },
};

class ItemList extends Component {
  state = {};
  updateParentState() {
    console.log("cambio lago");
  }
  render() {
    const { channels, filterBy, filterByFavorite, sortItems} = this.props;

    if (sortItems) {
      channels.sort((a, b) => {
        return b.rating - a.rating;
      });
    }

    return (
      <section style={styles.container}>
        {filterByFavorite &&
          channels
            .filter((item) => item.isFavorite === filterByFavorite)
            .map((item) => {
              console.log("entro en este");
              return (
                <ChannelItem
                  channel={item}
                  key={item.id}
                  updateParentState={this.updateParentState}
                />
              );
            })}

        {!filterBy &&
          !filterByFavorite &&
          channels.map((item) => (
            <ChannelItem
              channel={item}
              key={item.id}
              updateParentState={this.updateParentState}
            />
          ))}

        {filterBy &&
          !filterByFavorite &&
          channels
            .filter((item) => {
              return item.tipo.includes(filterBy);
            })
            .map((item) => (
              <ChannelItem
                channel={item}
                key={item.id}
                updateParentState={this.updateParentState}
              />
            ))}
      </section>
    );
  }
}

export default ItemList;
