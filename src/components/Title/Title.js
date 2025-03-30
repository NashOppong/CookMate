import React from "react";
import styles from "./TitleStyle";
import { View, Text } from "react-native";
const Title = ({ label }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>{label}</Text>
    </View>
  );
};
export default React.memo(Title);
