import React, { createContext, useState, useContext } from "react";
import type { Ingredient } from "./makeline";

interface IngredientsContextType {
  selectedIngredients: Ingredient[];
  toggleIngredient: (ingredient: Ingredient) => void;
  clearIngredients: () => void;
}

const IngredientsContext = createContext<IngredientsContextType>(
  {} as IngredientsContextType
);

interface IngredientsProviderProps {
  children: React.ReactNode;
}
const IngredientsProvider: React.FC<IngredientsProviderProps> = ({ children }) => {
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [menuItem, setMenuItem] = useState();

  const toggleIngredient = (newIngredient: Ingredient) => {
    setSelectedIngredients((prevIngredients) => {
      if (prevIngredients.includes(newIngredient)) {
        return prevIngredients.filter((ingredient) => ingredient !== newIngredient);
      } else {
        return [...prevIngredients, newIngredient];
      }
    });
  };

  const clearIngredients = () => {
    setSelectedIngredients([]);
  };

  const contextValue: IngredientsContextType = {
    selectedIngredients,
    toggleIngredient,
    clearIngredients,
  };

  return (
    <IngredientsContext.Provider value={contextValue}>
      {children}
    </IngredientsContext.Provider>
  );
};

export { IngredientsContext, IngredientsProvider };
