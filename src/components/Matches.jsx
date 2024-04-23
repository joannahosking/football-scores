import { useEffect } from "react";

const Matches = (props) => {
  useEffect(() => {
    const config = {
      method: "get",
      url: "https://v3.football.api-sports.io/leagues?type=league",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_FOOTBALL_KEY,
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
    };

    // axios(config)
    //   .then((res) => {
    //     console.log(res.data.response);
    //   })
    //   .catch((err) => console.error(err));
  }, []);

  return (
    <section className="matches">
      recent matches
    </section>
  );
};

export default Matches;
