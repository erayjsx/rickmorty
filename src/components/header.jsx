function Header() {
  return (
    <header className="absolute flex items-center w-full h-24 max-lg:pt-8">
      <div className="flex items-center justify-between w-full h-full max-w-screen-lg gap-6 px-4 mx-auto max-lg:items-center max-lg:flex-col">
        <a href="/">
          <img
            src="https://vite-rickandmorty.vercel.app/logo.png"
            className="object-contain w-auto h-16"
          ></img>
        </a>
        <div className="flex items-center *:max-lg:text-base h-full gap-10 max-lg:gap-5 *:font-semibold *:text-xl *:transition hover:*:opacity-70">
          <a href="/">home</a>
          <a href="/characters">characters</a>
          <a href="/episodes">episodes</a>
          <a href="/locations">locations</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
