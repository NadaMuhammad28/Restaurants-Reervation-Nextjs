"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();

  const [searchVal, setSearchVal] = useState("");
  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchVal) router.push(`/search?city=${searchVal}`);
  };
  return (
    <form
      className="text-left text-lg py-3 m-auto flex justify-center"
      onSubmit={handleSearch}
    >
      <input
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
      />
      <button className="rounded bg-red-600 px-9 py-2 text-white">
        Let's go
      </button>
    </form>
  );
}
