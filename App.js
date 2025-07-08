import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import SplashScreen from "./src/screens/Splash/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/Home/HomeScreen";
import LoginPage from "./src/screens/Auth/LoginPage/LoginPage";
import SignUpPage from "./src/screens/Auth/SignUpPage/SignUpPage";
import { getRecipes } from "./src/components/Http";

const Stack = createStackNavigator();
export const RecipesContext = React.createContext();
export const HealthyRecipesContext = React.createContext();
export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [HealthyRecipes, setHealthyRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const rec = await handleRecipesFetch();
      if (rec) setRecipes(rec);
      console.log(rec);
      const healthyRec = await handleHealthyRecipesFetch(("meal", 20, 64453));

      setHealthyRecipes(healthyRec);
      //console.log(healthyRec);
    })();
  }, []);
  const handleRecipesFetch = async (tags, size, id) => {
    try {
      const recipes = await getRecipes(tags, size, id);

      return recipes?.data?.results;
      console.log(recipes?.data?.results);
    } catch (err) {
      console.error("Error fetching recipes :>>", err);
    }
  };
  const handleHealthyRecipesFetch = async (tags, size, id) => {
    try {
      const recipes = await getRecipes(tags, size, id);

      return recipes?.results;
      //console.log(recipes?.data?.results);
    } catch (err) {
      console.error("Error fetching recipes :>>", err);
    }
  };
  return (
    <HealthyRecipesContext.Provider
      value={{ HealthyRecipes, setHealthyRecipes }}
    >
      <RecipesContext.Provider value={{ recipes, setRecipes }}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="splash" component={SplashScreen} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="loginScreen" component={LoginPage} />
              <Stack.Screen name="SignUpScreen" component={SignUpPage} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </RecipesContext.Provider>
    </HealthyRecipesContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "red",
  },
});
