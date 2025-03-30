import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../constants/colors";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  ScrollContainer: {
    flexGrow: 1, // adjust the scrollView to match the
  },
  container: {
    //flex: 1,
    //backgroundColor: colors.green,
  },

  backgroundImage: {
    //flex: 1,
    resizeMode: "cover",
    width: width, // Set the width to match the screen width
    flex: 1,
    resizeMode: "cover",
  },
  titles: {
    marginTop: 150,
    marginHorizontal: 30,
  },
  title1: {
    fontSize: 30,
    fontWeight: "900",
    color: colors.black,
  },
  subTitle: {
    marginTop: 10,
    fontSize: 18,
    color: colors.black,
  },
  forms: {
    marginTop: 20,
    marginHorizontal: 30,
    paddingHorizontal: 10,
  },
  email: {
    flexDirection: "row",
    height: 60,
    //justifyContent: "center",
    borderBottomWidth: 0.5,
  },
  emailHolder: {
    padding: 10,
    width: 250,
    //borderWidth: 1,
  },
  emailIcon: { paddingTop: 20 },
  password: {
    marginTop: 20,
    flexDirection: "row",
    height: 60,
    borderBottomWidth: 0.5,
  },
  passwordHolder: {
    paddingRight: 30,
    //borderWidth: 1,
    width: 250,
  },
  passwordIcon: { paddingTop: 20 },
  eyeIcon: {
    marginTop: 15,
    marginLeft: 10,
  },
  forgot: {
    marginLeft: 220,
    marginTop: 20,
    //borderWidth: 1,
  },
  forgotText: {
    fontWeight: "bold",
    color: colors.green,
    //marginBottom: 50,
  },
  loginButton: {
    marginTop: 40,
    //borderWidth: 1,
    width: 200,
    height: 40,
    marginLeft: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: colors.green,
    flexDirection: "row",
  },
  ButtonText: {
    color: colors.white,
    fontSize: 18,
    position: "relative",
  },
  arrowRight: {
    marginLeft: 60,
    position: "absolute",
  },
  altLogin: {
    marginLeft: 120,
    marginVertical: 20,
  },
  altText: {
    color: colors.black,
    fontWeight: "800",
    fontSize: 15,
  },
  google: {
    //marginTop: 10,
    marginLeft: 100,
  },
  AltSignUp: {
    //borderWidth: 1,
    marginTop: 50,
    flexDirection: "row",
    marginHorizontal: 10,
    marginLeft: 75,
    //marginBottom: 300,
  },

  signUpText: {
    fontWeight: "bold",
    color: colors.green,
    marginLeft: 10,
  },
});
export default styles;
