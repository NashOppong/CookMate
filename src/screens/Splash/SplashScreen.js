import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import styles from "./SplashStyle";
import StartCooking from "../../components/Buttons/StartCooking/StartCooking";
import { useNavigation } from "@react-navigation/native";
import { getRecipes } from "../../components/Http";
import { RecipesContext } from "../../../App";

const SplashScreen = () => {
  const navigation = useNavigation();

  const handleStartCooking = () => {
    navigation.navigate("loginScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../images/splash-background.png")}
      >
        <View style={styles.chefHat}>
          <Image
            style={styles.chefHatImage}
            source={require("../../images/splash-chefhat.png")}
          />
          <Text style={styles.chefHatText}>100k+ Premium Recipe</Text>
        </View>
        <View style={styles.SplashTextView}>
          <Text style={styles.splashText0}>Get</Text>
          <Text style={styles.splashText1}>Cooking</Text>
          <Text style={styles.splashText2}>
            Simple Way To Find Tasty Recipe
          </Text>
        </View>
        <View style={styles.startCookingContainer}>
          <StartCooking onPress={handleStartCooking} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default React.memo(SplashScreen);
