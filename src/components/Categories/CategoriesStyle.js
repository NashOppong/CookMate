import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: "600",
    marginTop: 10,
    color: colors.green,
  },
  view: {},
  selectedView: {
    borderWidth: 1,
    borderColor: colors.green,
    marginHorizontal: 10,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: colors.green,
  },
  selectedText: {
    color: colors.white,
    paddingBottom: 10,
  },
});
export default styles;
