import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./SkipButtonStyle";
import { useNavigation } from "@react-navigation/native";
const skipButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <Text style={styles.text}>skip</Text>
      </TouchableOpacity>
    </View>
  );
};
export default React.memo(skipButton);
