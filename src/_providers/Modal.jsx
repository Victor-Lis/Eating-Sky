import { createContext, useState } from "react";

const MenuContext = createContext({
  open,
  toggleOpen,
});

export default function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
      {children}
    </MenuContext.Provider>
  );
}
