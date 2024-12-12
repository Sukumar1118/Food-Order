import { useState } from "react";

export const User = () => {
  const [count] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Name: Sukumar</h2>
      <h3>Location: Bangalore</h3>
      <h4>Contact: sukumar1118@gmail.com</h4>
    </div>
  );
};
