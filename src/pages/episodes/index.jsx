import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEpisodeStore } from "../../store/store";
import { useEffect } from "react";
import Card from "../../components/card";

function Episodes() {
  const { episodes, fetchEpisodes } = useEpisodeStore();

  useEffect(() => {
    fetchEpisodes();
  }, [fetchEpisodes]);

  return (
    <>
      <Header />

      <h1 className="w-full max-w-screen-xl mx-auto mb-8 text-3xl font-bold text-center pt-44">
        Episodes
      </h1>
      <div className="grid items-center justify-center max-w-screen-xl grid-cols-3 gap-3 px-4 mx-auto max-sm:grid-cols-1 max-lg:grid-cols-2">
        {episodes.map((item, index) => (
          // eslint-disable-next-line react/jsx-key
          <Card
            key={index}
            title={item.episode}
            gender={item.name}
            desc={item.air_date}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Episodes;
