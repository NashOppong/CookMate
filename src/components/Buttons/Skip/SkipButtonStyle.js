import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    //borderWidth: 1,
    borderColor: colors.black,

    justifyContent: "center",
    alignItems: "center",
    marginLeft: 320,
    marginTop: 90,
  },
  text: {
    color: colors.green,
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default styles;
