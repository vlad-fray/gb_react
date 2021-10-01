export const loadNewsAPI = async () => {
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

    const ranVehicle = vehicles.results[Math.floor(Math.random() * 10)];
    const ranPerson = people.results[Math.floor(Math.random() * 10)];
    const ranStarship = starships.results[Math.floor(Math.random() * 10)];
    return { vehicle: ranVehicle, person: ranPerson, starship: ranStarship };
  } catch (err) {
    console.log(err.message);
  }
};
