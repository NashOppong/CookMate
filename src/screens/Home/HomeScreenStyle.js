import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    //flex: 1,
    //backgroundColor: colors.green,
    //height:
  },
  welcome: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  welcomeText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
    color: colors.green,
  },
  searchContainer: {
    marginLeft: 10,
  },
  SearchBar: {
    width: 321,
    height: 40,
    //borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 40,
    //borderColor: colors.black,
    backgroundColor: colors.gray,
    paddingLeft: 10,
  },
  FeaturedContainer: {
    //borderWidth: 1,
  },
});
export default styles;
