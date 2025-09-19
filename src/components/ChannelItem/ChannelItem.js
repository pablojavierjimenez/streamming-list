import React, { Component } from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const imagesFolder = require.context("../../assets/img/", true);
export default class ChannelItem extends Component {
  
  render() {
    let styles = {
      ChannelItem: {
        borderRadius: "4px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        backgroundColor: "white",
        padding: "20px 20px 10px",
        maxWidth: "200px",
        maxHeight: "300px",
        minHeight: "250px",
        margin: "24px 32px 24px 24px",
        display: "inline-block",
      },
      info: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 0 4px",
        height: "30px",
      },
      infoButton: {
        padding: "4px",
        border: "1px solid black",
        margin: "4px 0",
        color: "white",
        backgroundColor: "#16356e",
        fontWeight: "bold",
        textDecoration: "none",
        textTransform: "capitalize",
        fontSize: "12px",
        borderRadius: "4px"
      },
      logo: {
        width: "200px",
        height: "200px",
        borderRadius: "30px",
      },
    };
    let { channel, updateParentState } = this.props;
    let favorites = JSON.parse(localStorage.getItem("FavoritesChannels"));

    // favorites.forEach((item) => {
    //   // channel.filter((chItem) => {
    //     if (channel.id === item.id) {
    //       channel.isFavorite = item.isFavorite;
    //     } else {
    //       channel.isFavorite = false
    //     }
    //   // });
    // });

    /**
     * TODO: arreglar el boton de info aca, y luego descomentar la linea 85 a 92
     */
    
    if (channel.info !== "") {
      console.log(`Mostrar: ${channel.title}`);
      styles.infoButton.visibility = "visible";
    } else {
      styles.infoButton.visibility = "hidden";

    }

    const itemClassName = `ChannelItem ${channel.costo}`;

    return (
      <div
        className={itemClassName}
        style={styles.ChannelItem}
        tabIndex={channel.id + 8}
      >
        <div className="ChannelItem__info">
          <h4>{channel.title}</h4>
        </div>
        <div className="ChannelItem__preview">
          <a href={channel.url} target={channel.title}>
            <img
              src={imagesFolder(channel.logo)}
              style={styles.logo}
              alt={channel.title}
            />
          </a>
        </div>
        <small style={styles.info}>
          <a
            href={channel.info}
            rel="noreferrer"
            style={styles.infoButton}
            target="_blank"
          >
            noticias
          </a>
          {channel.description !== "" && (
            <details>
              <summary>detalles</summary>
              <p>{channel.description}</p>
            </details>
          )}
          <FavoriteButton
            channel={channel}
            updateParentState={updateParentState}
          />
        </small>
      </div>
    );
  }
}
