import React, { useState } from "react";
import Rating from "./components/Rating";
import Thanks from "./components/Thanks";

const App = () => {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {submitted ? (
        <Thanks rating={rating} />
      ) : (
        <Rating
          rating={rating}
          setRating={setRating}
          setSubmitted={setSubmitted}
        />
      )}
    </div>
  );
};

export default App;
