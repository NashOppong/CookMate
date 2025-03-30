import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Allows the content to scroll if it overflows
    //backgroundColor: colors.green,
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%", // Use percentage for dynamic scaling
    height: "100%", // Use percentage for dynamic scaling
  },
  chefHat: {
    marginTop: 80, // Adjusted for better scaling
    alignSelf: "center", // Centers the chef hat horizontally
    width: 209,
    height: 122,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  chefHatImage: {
    width: 79,
    height: 79,
  },
  chefHatText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
  SplashTextView: {
    marginTop: 300, // Reduced to avoid overflow
    paddingHorizontal: 20, // Added padding for better alignment on smaller screens
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20, // Reduced to ensure better fit
  },
  splashText0: {
    color: colors.white,
    fontSize: 36, // Reduced font size for smaller screens
    textAlign: "center",
    fontWeight: "600",
  },
  splashText1: {
    color: colors.white,
    fontSize: 36, // Same as above for consistency
    textAlign: "center",
    fontWeight: "600",
  },
  splashText2: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 8,
  },
  startCookingContainer: {
    marginTop: 40,
    alignItems: "center", // Center aligns the button
    marginRight: 90,
  },
});

export default styles;
