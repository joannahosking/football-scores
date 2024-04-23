import { useState, useEffect } from "react";
import Leagues from "./components/Leagues";
import Matches from './components/Matches';
import Table from "./components/Table";
import "./scss/index.scss";

function App() {
  const [leagues, setLeagues] = useState([
    {
      id: 39,
      name: "Premier League",
      country: {
        name: "England",
        code: "GB",
      },
    },
    {
      id: 61,
      name: "Ligue 1",
      country: {
        name: "France",
        code: "FR",
      },
    },
    {
      id: 78,
      name: "Bundesliga",
      country: {
        name: "Germany",
        code: "DE",
      },
    },
    {
      id: 135,
      name: "Serie A",
      country: {
        name: "Italy",
        code: "IT",
      },
    },
    {
      id: 140,
      name: "La Liga",
      country: {
        name: "Spain",
        code: "ES",
      },
    },
  ]);

  const [currentLeague, setCurrentLeague] = useState({
    id: 39,
    name: "Premier League",
    country: {
      name: "England",
      code: "GB",
    },
  });

  return (
    <main>
      <Leagues
        leagues={leagues}
        currentLeague={currentLeague}
        setCurrentLeague={setCurrentLeague}
      />
      <Matches currentLeague={currentLeague} />
      <Table currentLeague={currentLeague} />
    </main>
  );
}

export default App;
