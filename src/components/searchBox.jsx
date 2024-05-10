function SearchBox() {
  return (
    <div className="w-full max-w-screen-md px-4 space-y-6 text-center">
      <h1 className="text-4xl font-semibold max-lg:text-2xl">
        search for character
      </h1>
      <input
        placeholder="search for character"
        className="w-full p-6 max-lg:p-4 placeholder:text-[#bbada0] max-lg:px-6 max-lg:text-lg px-10 font-semibold text-2xl hover:ring-4 focus:ring-4 ring-4 ring-[#8b8b8b86] focus:ring-black hover:ring-black outline-none transition rounded-full bg-[#E9DDD1] hover:bg-[#ddd4cc]"
      />
    </div>
  );
}

export default SearchBox;
