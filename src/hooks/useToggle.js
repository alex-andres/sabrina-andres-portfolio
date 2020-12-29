import { useState } from "react";

export const useToggle = (initialState) => {
  const [isToggled, setToggle] = useState(initialState);
  const toggle = () => setToggle((prevState) => !prevState);
  return { isToggled, setToggle, toggle };
};
