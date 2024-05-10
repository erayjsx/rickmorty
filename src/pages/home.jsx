/* eslint-disable no-unused-vars */
import SearchBox from "../components/searchBox";
import Header from "../components/header";
import Card from "../components/card";
import Footer from "../components/footer";
import Slider from "react-slick";
import {
  useCharacterStore,
  useLocationStore,
  useEpisodeStore,
} from "../store/store";
import { useEffect } from "react";

function Home() {
  var settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  const { characters, fetchCharacters } = useCharacterStore();
  const { locations, fetchLocations } = useLocationStore();
  const { episodes, fetchEpisodes } = useEpisodeStore();

  useEffect(() => {
    fetchCharacters();
    fetchLocations();
    fetchEpisodes();
  }, [fetchCharacters, fetchLocations, fetchEpisodes]);

  return (
    <>
      <Header />
      <div className="">
        <div className="flex bg-[url(https://image.tmdb.org/t/p/original/pIfH7MhJCeJ69324YIWh4SpOQe5.jpg)] bg-cover bg-center flex-col items-center justify-center h-[40rem]">
          <div className="bg-gradient-to-b flex h-full w-full items-center justify-center from-[#f7efe786] to-[#f7efe7]">
            <SearchBox />
          </div>
        </div>
        <div className="w-full max-w-screen-lg px-4 mx-auto space-y-12">
          <div>
            <h1 className="mb-4 text-3xl font-semibold">Characters</h1>

            <Slider {...settings} className="*:p-3 flex gap-8">
              {characters.map((item, index) => (
                // eslint-disable-next-line react/jsx-key
                <Card
                  key={index}
                  id={item.id}
                  title={item.name}
                  gender={item.gender}
                  species={item.species}
                  image={item.image}
                />
              ))}
            </Slider>
          </div>

          <div>
            <h1 className="mb-4 text-3xl font-semibold">Episodes</h1>
            <Slider {...settings} className="*:p-3 flex gap-8">
              {episodes.map((item, index) => (
                <Card
                  key={index}
                  title={item.episode}
                  gender={item.name}
                  desc={item.air_date}
                />
              ))}
            </Slider>
          </div>

          <div>
            <h1 className="mb-4 text-3xl font-semibold">Locations</h1>
            <Slider {...settings} className="*:p-3 flex gap-8">
              {locations.map((item, index) => (
                <Card
                  key={index}
                  title={item.name}
                  gender={item.type}
                  desc={item.dimension}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
