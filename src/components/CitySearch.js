import { useState } from 'react';


const CitySearch = () => {
  const [city, setCity] = useState("");
  const [autoCompleteCities, setAutoCompleteCities] = useState([]);
  const [autoCompleteErr, setAutoCompleteErr] = useState("")

  const fetchPlace = async (text) => {
    try {
      const res = await fetch(
        
      )
    }
  }

  const handleCityChange = async (e) => {
    setCity(e.target.value);
    if (!city) return

    const res = await fetchPlace(city);
      !autoCompleteCities.includes(e.target.value) &&
        res.features &&
        setAutoCompleteCities(res.features.map(place => place.place_name));
      res.error ? setAutoCompleteErr(res.error) : setAutoCompleteErr("");
  }

  return (
    <div>
      <input type="text" />
      <submit></submit>
    </div>
  )
}

export default CitySearch;