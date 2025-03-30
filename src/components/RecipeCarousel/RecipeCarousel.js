import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import styles from "./RecipeCarouselStyle.js";
import CarouselFlatlist from "./CarouselFlatlist.js";
const RecipeCarousel = () => {
  return <CarouselFlatlist />;
};
export default React.memo(RecipeCarousel);
