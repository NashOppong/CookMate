import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // adjust the scrollView to match the
  },
  container: {
    //flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    //backgroundColor: colors.green,
    paddingTop: 20,
  },
  titleBox: {
    //borderWidth: 1,
    marginTop: 100,
    marginHorizontal: 20,
  },
  title1: {
    fontWeight: "900",
    fontSize: 30,
  },
  subTitle: {
    marginTop: 10,
    fontSize: 18,
  },
  formContainer: {
    //borderWidth: 1,
    marginTop: 30,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  emailBox: {
    flexDirection: "row",
    height: 70,
    //justifyContent: "center",
    borderBottomWidth: 0.5,
  },
  emailHolder: {
    padding: 10,
    width: 250,
  },
  emailIcon: { paddingTop: 25 },
  nameBox: {
    marginTop: 10,
    flexDirection: "row",
    height: 70,
    borderBottomWidth: 0.5,
  },
  nameHolder: {
    paddingRight: 30,
    width: 250,
  },
  nameIcon: { paddingTop: 25 },
  passwordBox: {
    flexDirection: "row",
    height: 70,
    //justifyContent: "center",
    borderBottomWidth: 0.5,
  },
  passwordHolder: {
    paddingRight: 30,
    width: 250,
  },
  passwordIcon: { paddingTop: 25 },
  eyeIconContainer: {
    marginLeft: 30,
    marginTop: 25,
  },
  terms: {
    marginTop: 20,
  },
  termsLink: {
    color: colors.green,
    fontSize: 16,
    paddingLeft: 10,
    fontWeight: "bold",
  },
  signUpButton: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.green,
    borderRadius: 20,
    width: 130,
    height: 40,
    marginLeft: 120,
  },
  signUpButtonText: {
    fontWeight: "bold",
    color: colors.white,
    marginLeft: 20,
  },
  google: {
    marginVertical: 10,
    marginLeft: 110,
  },
  alreadyAccount: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
    textAlign: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  alreadyAccountText: {
    textAlign: "center",
  },
  loginLink: {
    color: colors.green,
    paddingLeft: 5,
    fontWeight: "bold",
  },
});
export default styles;
