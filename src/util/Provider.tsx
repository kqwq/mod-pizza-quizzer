import React, { createContext, useState, useContext } from "react";
import type { Ingredient } from "./makeline";

interface StateContextType {
  // Variables
  selectedIngredients: Ingredient[];
  quizOrderMenuItems: string[];
  numMenuItemsCompleted: number;
  score: number;
  total: number;

  // Functions
  toggleIngredient: (ingredient: Ingredient) => void;
  clearIngredients: () => void;
  initMenuItemsQuiz: () => void;
}

const StateContext = createContext<StateContextType>(
  {} as StateContextType
);

interface StateProviderProps {
  children: React.ReactNode;
}
const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const [quizOrderMenuItems, setQuizOrderMenuItems] = useState<string[]>([]);
  const [numMenuItemsCompleted, setNumMenuItemsCompleted] = useState(0);
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

  const initMenuItemsQuiz = () => {
    setQuizOrderMenuItems([]);
    setNumMenuItemsCompleted(0);
    setScore(0);
    setTotal(0);
  };

  const contextValue: StateContextType = {
    selectedIngredients,
    quizOrderMenuItems,
    numMenuItemsCompleted,
    score,
    total,
    toggleIngredient,
    clearIngredients,
    initMenuItemsQuiz,
  };

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
