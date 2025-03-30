import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useContext } from "react";
import TempData from "../../constants/TempData";
import styles from "./RecipeCardStyle";
import { RecipesContext } from "../../../App";
const CardFlatList = () => {
  const { recipes } = useContext(RecipesContext);
  //console.log("Image URL:", item.thumbnail_url);

  const renderItems = ({ item }) => {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            console.log(`touced`);
          }}
        >
          <View style={styles.cardContainer}>
            <View style={styles.cardImage}>
              <Image
                style={styles.cardImg}
                source={{ uri: item?.thumbnail_url }}
              />
            </View>
            <View style={styles.cardTitle}>
              <Text numberOfLines={2} style={styles.cardTitleText}>
                {item?.name}
              </Text>
            </View>
            <View style={styles.cardTime}>
              <Text style={styles.text1}>Time</Text>
              <Text numberOfLines={1} style={styles.text2}>
                {item?.total_time_minutes ||
                  item?.cook_time_minutes ||
                  item?.prep_time_minutes}{" "}
                mins
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };
  return (
    <FlatList
      data={recipes}
      renderItem={renderItems}
      keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
      numColumns={2}
      nestedScrollEnabled={true}
      scrollEnabled={false}
    />
  );
};

export default React.memo(CardFlatList);
