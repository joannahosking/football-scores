import { useState, useEffect } from "react";
import axios from "axios";

const Table = (props) => {
  const { currentLeague } = { ...props };
  const [standings, setStandings] = useState(undefined);

  let date = new Date();
  let season =
    date.getMonth() < 7 ? date.getFullYear() - 1 : date.getFullYear();

  useEffect(() => {
    const config = {
      method: "get",
      url: "https://v3.football.api-sports.io/standings",
      params: {
        league: currentLeague.id,
        season: season,
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_FOOTBALL_KEY,
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
    };

    axios(config)
      .then((res) => {
        setStandings(res.data.response[0].league.standings[0]);
        console.log(res.data.response);
      })
      .catch((err) => console.error(err));
  }, [currentLeague]);

  return (
    <aside className="table">
      <table>
        <thead>
          <tr>
            <th className="position">#</th>
            <th className="club">Club</th>
            <th className="games">Games</th>
            <th className="points">Pts</th>
          </tr>
        </thead>
        <tbody>
          {standings &&
            standings.map((position, key) => (
              <tr key={key}>
                <td className={`position ${position.description ? position.description.replace(/ \(.*/, '').replace(/\s/g, '-').toLowerCase() : ''}`}>{key + 1}</td>
                <td className="club">
                  <img
                    src={`https://media.api-sports.io/football/teams/${position.team.id}.png`}
                    alt=""
                  />{" "}
                  {position.team.name}
                </td>
                <td className="games">{position.all.played}</td>
                <td className="points">{position.points}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </aside>
  );
};

export default Table;
