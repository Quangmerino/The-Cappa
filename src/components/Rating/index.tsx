import React, { useState } from "react";
import { VscStarFull } from "react-icons/vsc";

type Props = {
  star?: number
}

function Rating({star}:Props) {
  const [rating, setRating] = useState(star ?? 5);
  return (
    <div className="flex items-center gap-2">
      <VscStarFull
        className={`rating ${
          rating > 0 ? "text-[#e4a853]" : ""
        }`}
        onClick={() => setRating(1)}
      />
      <VscStarFull
        className={`rating ${
          rating > 1 ? "text-[#e4a853]" : ""
        }`}
        onClick={() => setRating(2)}
      />
      <VscStarFull
        className={`rating ${
          rating > 2 ? "text-[#e4a853]" : ""
        }`}
        onClick={() => setRating(3)}
      />
      <VscStarFull
        className={`rating ${
          rating > 3 ? "text-[#e4a853]" : ""
        }`}
        onClick={() => setRating(4)}
      />
      <VscStarFull
        className={`rating ${
          rating > 4 ? "text-[#e4a853]" : ""
        }`}
        onClick={() => setRating(5)}
      />
    </div>
  );
}

export default Rating;
