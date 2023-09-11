
import { useState } from "react";
import "./country.css"

const Country = ({country, addVisitedCountry}) => {

    const [isVisited, setIsVisited] = useState(false);
    
    const handleIsVisited = () => {
        setIsVisited(!isVisited);
    }

    return (
        <div className="country-card">
            <div className="flag">
                <img src={country.flags.png} alt="country-flag" />
            </div>
            <h4>Name: <span className="country-name">{country.name.common}</span></h4>
            <button onClick={handleIsVisited}>{isVisited ? "Visited" : "Mark as visited"}</button>
            &nbsp;
            <button onClick={() => addVisitedCountry(country)}>Add country</button>
        </div>
    );
};

export default Country;