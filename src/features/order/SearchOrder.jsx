import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-32 rounded-full bg-stone-100 px-4 py-1 text-sm transition-all
         duration-300
        placeholder:text-stone-400 focus:w-40
        focus:outline-none
        focus:ring
        focus:ring-cyan-500
         focus:ring-opacity-50
        sm:w-48 sm:focus:w-64"
        placeholder="Search order #"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
