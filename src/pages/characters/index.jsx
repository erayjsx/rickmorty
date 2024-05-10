import Header from "../../components/header";
import Footer from "../../components/footer";
import { useCharacterStore } from "../../store/store";
import { useEffect } from "react";
import Card from "../../components/card";

function Characters() {
  const { characters, fetchCharacters } = useCharacterStore();

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <>
      <Header />

      <h1 className="w-full max-w-screen-xl mx-auto mb-8 text-3xl font-bold text-center pt-44">
        Characters
      </h1>
      <div className="grid items-center justify-center max-w-screen-xl grid-cols-3 gap-3 px-4 mx-auto max-sm:grid-cols-1 max-lg:grid-cols-2">
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
      </div>
      <Footer />
    </>
  );
}

export default Characters;
