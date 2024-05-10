// eslint-disable-next-line no-unused-vars
const bg =
  "https://image.tmdb.org/t/p/original/7DE67DzAlZmCOm1OYnAL7gV1B8w.jpg";

function Footer() {
  return (
    <footer className="flex items-center w-full h-96 bg-[url(https://image.tmdb.org/t/p/original/At7d4IHmqNFJJ7jnhwAXdGOSlgj.jpg)] bg-cover bg-bottom">
      <div className="flex items-center flex-col justify-center w-full h-full mx-auto bg bg-gradient-to-t from-[#f7efe786] to-[#f7efe7]">
        <div className="flex items-center *:max-lg:text-base gap-8 *:text-lg *:transition hover:*:opacity-70">
          <a href="/">home</a>
          <a href="/characters">characters</a>
          <a href="/episodes">episodes</a>
          <a href="/locations">locations</a>
        </div>
        <a href="/">
          <img
            src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbZPI3GuHkwXQ6gf1rUob3iLTDBx10_6E6_L6qZCVcn6QhivB-P8dqn-wWWErynEpeyCrfnJY_GZTXAdbv2L9Sl1PcLGH8vc7S7XpYJzcc3J.png?r=871"
            className="object-contain w-40 h-16"
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
