/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
function Card({ id, title, desc, image, gender, species }) {
  return (
    <a
      href={`/characters/${id}`}
      className="flex w-96 overflow-hidden max-sm:w-full h-40 bg-[#E9DDD1] hover:opacity-80 transition rounded-3xl"
    >
      {image && (
        <img src={image} alt={title} className="object-cover w-40 h-40" />
      )}
      <div className="flex flex-col px-3 py-5 space-y-1">
        <h1 className="text-xl font-bold max-lg:text-lg line-climp-2">
          {title}
        </h1>
        {gender && <p>{gender}</p>}
        {species && <p>{species}</p>}
        {desc && <p>{desc}</p>}
      </div>
    </a>
  );
}

export default Card;
