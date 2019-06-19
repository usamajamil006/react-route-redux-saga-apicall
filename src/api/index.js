const KEY = "mWW36XM9XBprnpfIZCKovK5GKL3HoB2i";

const fetchWeather = async city => {
  const res = await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${KEY}&q=${city}&offset=2`
  );
  const data = await res.json();
  console.log(data[0])
  if (!data) {
    throw new Error(data.errors);
  }

  return data[0];
};
export {fetchWeather};
