import React, { createContext, useState, useContext } from "react";
import { shuffleItems } from "./algorithms";
import { Ingredient, menuItemNames, menuItems } from "./makeline";

interface StateContextType {
  // Variables
  selectedIngredients: Ingredient[];
  quizOrderMenuItems: string[];
  numMenuItemsCompleted: number;
  correctMenuItems: string[];
  incorrectMenuItems: string[];
  score: number;
  total: number;

  // Functions
  toggleIngredient: (ingredient: Ingredient) => void;
  clearIngredients: () => void;
  initMenuItemsQuiz: () => void;
  submitQuiz: () => void;
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
  const [correctMenuItems, setCorrectMenuItems] = useState<string[]>([]);
  const [incorrectMenuItems, setIncorrectMenuItems] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

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
    // Reset state
    setQuizOrderMenuItems([]);
    setNumMenuItemsCompleted(0);
    setCorrectMenuItems([]);
    setIncorrectMenuItems([]);
    setScore(0);
    setTotal(0);

    // Shuffle menu items
    const menuItemNamesShuffled = shuffleItems(menuItemNames);

    // Set state
    setQuizOrderMenuItems(menuItemNamesShuffled);
  };

  const submitQuiz = () => {

    // Check if correct
    const currentMenuItem = quizOrderMenuItems[numMenuItemsCompleted];
    const currentMenuItemIngredients = menuItems[currentMenuItem as keyof typeof menuItems];
    const currentMenuItemIngredientsSorted = currentMenuItemIngredients.sort();
    const selectedIngredientsSorted = selectedIngredients.sort();
    const isCorrect = JSON.stringify(currentMenuItemIngredientsSorted) === JSON.stringify(selectedIngredientsSorted);

    // Increment score if correct
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      setCorrectMenuItems((prevCorrectMenuItems) => [...prevCorrectMenuItems, currentMenuItem]);
    } else {
      setIncorrectMenuItems((prevIncorrectMenuItems) => [...prevIncorrectMenuItems, currentMenuItem]);
    }

    // Increment total
    setTotal((prevTotal) => prevTotal + 1);

    // Increment number of menu items completed
    setNumMenuItemsCompleted((prevNumMenuItemsCompleted) => prevNumMenuItemsCompleted + 1);

    // Reset selected ingredients
    clearIngredients();
  };

  const contextValue: StateContextType = {
    selectedIngredients,
    quizOrderMenuItems,
    numMenuItemsCompleted,
    correctMenuItems,
    incorrectMenuItems,
    score,
    total,
    toggleIngredient,
    clearIngredients,
    initMenuItemsQuiz,
    submitQuiz
  };

  // First time only
  if (quizOrderMenuItems.length === 0) {
    initMenuItemsQuiz();
  }

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
