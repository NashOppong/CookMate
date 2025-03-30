import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    width: 251,
    borderWidth: 1,
    borderColor: colors.gray,
    margin: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  a: {},
  image: {
    //
    width: 90,
    height: 86,
    marginLeft: "60%",
    borderRadius: 30,
  },
  carouselImg: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    overflow: "hidden",
  },
  food: {
    width: 139,
    height: 23,
    marginTop: 10,
    position: "absolute",
    marginLeft: 10,
  },
  text: {
    fontWeight: "600",
    fontSize: 15,
  },
  rating: {
    height: 25,
    width: 63,
    position: "absolute",
    marginTop: 50,
    marginLeft: 10,
  },
  ratingText: {
    color: colors.grayShade1,
  },
  author: {
    width: 113,
    height: 25,
    paddingLeft: 10,
  },
  timer: {
    marginLeft: "70%",
    position: "absolute",
    marginTop: 100,
    height: 25,
    width: 70,
  },
});
export default styles;
