import React, { useContext } from "react";
import { View, Text, ScrollView, TextInput, FlatList } from "react-native";
import styles from "./HomeScreenStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../../components/Title/Title";
import Categories from "../../components/Categories/Categories";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeCarousel from "../../components/RecipeCarousel/RecipeCarousel";
import TempData from "../../constants/TempData";
import CarouselFlatlist from "../../components/RecipeCarousel/CarouselFlatlist";
import { HealthyRecipesContext, RecipesContext } from "../../../App";
const HomeScreen = () => {
  const { recipes } = useContext(RecipesContext);
  const { HealthyRecipes } = useContext(HealthyRecipesContext);
  console.log("HealthyRecipes:>>", HealthyRecipes);

  //console.log("Recipes:>>", recipes);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.welcome}>
            <Text style={styles.welcomeText}>Home</Text>
          </View>
          <View style={styles.SearchContainer}>
            <TextInput style={styles.SearchBar} placeholder="Search Recipe" />
          </View>
        </View>
        <View style={styles.FeaturedContainer}>
          <Title label="Featured Recipes" />

          <RecipeCarousel />
        </View>
        <Categories
          categoriesList={[
            "Trending",
            "Seasonal",
            "Chocoholic",
            "Dairy",
            "Breakfast",
            "Lunch",
            "Dinner",
            "Snacks",
            "Deserts",
            "Side Dishes",
          ]}
        />
        <RecipeCard recipes={recipes} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default React.memo(HomeScreen);
