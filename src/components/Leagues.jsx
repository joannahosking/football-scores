import { useState, useEffect } from "react";
import axios from "axios";

const Leagues = (props) => {
  const { leagues, currentLeague, setCurrentLeague } = { ...props };

  return (
    <nav className="leagues">
      <ul>
        {leagues.map((league) => (
          <li key={league.id} className={league.id === currentLeague.id ? 'active' : ''}>
            <button onClick={() => league.id !== currentLeague.id ? setCurrentLeague(league) : null}>
              <img src={`https://media.api-sports.io/flags/${league.country.code}.svg`} alt={league.name} />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Leagues;
