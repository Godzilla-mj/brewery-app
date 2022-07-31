import React, { useEffect, useState } from "react";
import CitySearch from "../components/CitySearch";
import styles from "../styles/List.module.css";

const NYlist = () => {
  // const api = "https://api.openbrewerydb.org/breweries";
  const api = "https://api.openbrewerydb.org/breweries?by_city=york&per_page=3"


  const [list, setList] = useState([]);

  useEffect(() => {
    updateList();
  }, []);

  const updateList = () => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => {
        setList(json);
      });
  };

  const listGen = (brewery) => {
    return (
      <li key={brewery.id}>
        <div>{brewery.name}</div>
        <div>{brewery.street}</div>
        <div>{brewery.city}, {brewery.state}</div>
      </li>
    );
  };

  return (
    <div>
      <h1>List of Current Breweries</h1>
      <CitySearch />
      <div>
        <ul className={styles.list}>
          {list.map((brewery) => listGen(brewery))}
        </ul>
      </div>
    </div>
  );
};

export default NYlist;
