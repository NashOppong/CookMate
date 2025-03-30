import React, { useContext } from "react";
import { Text, View } from "react-native";
import styles from "./RecipeCardStyle";
import CardFlatList from "./CardFlatList";
import { RecipesContext } from "../../../App";

const RecipeCard = () => {
  const { recipes } = useContext(RecipesContext);
  return <CardFlatList />;
};
export default React.memo(RecipeCard);
