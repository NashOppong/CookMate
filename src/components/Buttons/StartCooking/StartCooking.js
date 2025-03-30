import React from "react";
import { Button, View } from "react-native";
import styles from "./StartCookingStyle";
import colors from "../../../constants/colors";

const StartCookingButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Start Cooking"
        style={styles.startCookingButton}
        onPress={onPress}
        color={colors.green}
      />
    </View>
  );
};
export default React.memo(StartCookingButton);
