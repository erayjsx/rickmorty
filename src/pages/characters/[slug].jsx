import Header from "../../components/header";
import Footer from "../../components/footer";
import { useCharacterStore, useEpisodeStore } from "../../store/store";
import { useEffect } from "react";
import Card from "../../components/card";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

function Char() {
  var settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
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

  const { slug } = useParams();
  const { characters, fetchCharacterById } = useCharacterStore();
  const { episodes, fetchEpisodes } = useEpisodeStore();

  useEffect(() => {
    fetchCharacterById(slug);
    fetchEpisodes();
  }, [slug, fetchCharacterById, fetchEpisodes]);

  return (
    <>
      <Header />

      {characters.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <div className="flex flex-col items-center justify-center w-full max-w-screen-xl gap-4 pt-32 mx-auto text-center max-lg:pt-48">
          <img src={item.image} className="w-32 h-32 rounded-full" />
          <h1 className="mt-2 text-3xl font-bold">{item.name}</h1>
          <div className="flex gap-2">
            <p>{item.status}</p> - <p>{item.species}</p> - <p>{item.gender}</p>
          </div>
          <div className="px-5 py-2 text-white rounded-full bg-zinc-950">
            <p>{item.location.name}</p>
          </div>
        </div>
      ))}

      <div className="max-w-screen-lg gap-3 px-4 mx-auto mt-8 max-sm:grid-cols-1 max-lg:grid-cols-2">
        <h1 className="mb-4 text-2xl font-semibold">Episodes</h1>

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
      <Footer />
    </>
  );
}

export default Char;
