export const reloadNewsAPI = async (counts) => {
  const { vehCount, peopleCount, starCount } = counts;

  const ranVehicle = Math.floor(Math.random() * vehCount);
  const ranPerson = Math.floor(Math.random() * peopleCount);
  const ranStarship = Math.floor(Math.random() * starCount);

  try {
    const vehicle = await fetch(
      `https://swapi.dev/api/vehicles/${ranVehicle}`
    ).then((res) => res.json());
    const person = await fetch(
      `https://swapi.dev/api/people/${ranPerson}`
    ).then((res) => res.json());
    const starship = await fetch(
      `https://swapi.dev/api/starships/${ranStarship}`
    ).then((res) => res.json());

    return { vehicle, person, starship };
  } catch (err) {
    console.log(err.message);
  }
};

export const loadNewsCountAPI = async () => {
  try {
    const vehicles = await fetch('https://swapi.dev/api/vehicles').then((res) =>
      res.json()
    );
    const people = await fetch('https://swapi.dev/api/people').then((res) =>
      res.json()
    );
    const starships = await fetch('https://swapi.dev/api/starships').then(
      (res) => res.json()
    );

    const { count: vehCount } = vehicles;
    const { count: peopleCount } = people;
    const { count: starCount } = starships;

    return { vehCount, peopleCount, starCount };
  } catch (err) {
    console.log(err.message);
  }
};
