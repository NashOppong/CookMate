import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
const styles = StyleSheet.create({
  container: {
    //width: 360,
    //height: 231,
    //borderWidth: 1,
    margin: 10,
    flex: 1,
    backgroundColor: colors.gray,
    borderRadius: 20,
  },
  cardContainer: {
    height: 230,
    width: "100%",
    padding: 10,
    backgroundColor: colors.gray,
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,

    elevation: 6,
    //borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
  cardImage: {
    //borderWidth: 1,
    width: 109,
    height: 110,
    marginBottom: 10,
    marginLeft: 25,
    borderRadius: 60,
    overflow: "hidden",
    backgroundColor: colors.gray,
  },
  cardImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  cardTitle: {
    //borderWidth: 1,
    width: 130,
    height: 40,
    marginBottom: 10,
    marginLeft: 10,
    backgroundColor: colors.gray,
  },
  cardTitleText: {
    fontWeight: "600",
    fontSize: 14,
  },
  cardTime: {
    //borderWidth: 1,
    width: 60,
    height: 39,
    marginBottom: 10,
    backgroundColor: colors.gray,
  },
  text1: { color: colors.grayShade1 },
  text2: { fontWeight: "bold" },
});
export default styles;
