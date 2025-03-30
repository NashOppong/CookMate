import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./CategoriesStyle";

const Categories = ({ categoriesList }) => {
  const renderItems = ({ item }) => {
    const selected = selectedCategory === item;

    return (
      <TouchableOpacity onPress={() => setSelectedCategory(item)}>
        <View style={[styles.View, selected ? styles.selectedView : {}]}>
          <Text style={[styles.text, selected ? styles.selectedText : {}]}>
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const [selectedCategory, setSelectedCategory] = useState(categoriesList[0]);
  return (
    <FlatList
      data={categoriesList}
      renderItem={renderItems}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};
export default React.memo(Categories);
