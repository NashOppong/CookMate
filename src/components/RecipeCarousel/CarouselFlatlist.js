import React from "react";
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./RecipeCarouselStyle"; // Assuming the styles file is named "styles.js"
import TempData from "../../constants/TempData";

const CarouselFlatList = () => {
  const renderItems = () => {};
  return (
    <FlatList
      horizontal
      pagingEnabled={false}
      snapToEnd={true}
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      data={TempData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <TouchableOpacity>
              {/* Image Section */}
              <View style={styles.image}>
                <Image source={item.path} style={styles.carouselImg} />
              </View>
              {/* Food Name */}
              <View style={styles.food}>
                <Text numberOfLines={1} style={styles.text}>
                  {item.name}
                </Text>
              </View>
              {/* Rating */}
              <View style={styles.rating}>
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
              {/* Author */}
              <View style={styles.author}>
                <Text numberOfLines={1} style={styles.text}>
                  By {item.author}
                </Text>
              </View>
              {/* Timer */}
              <View style={styles.timer}>
                <Text style={styles.text}>{item.timer}</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default React.memo(CarouselFlatList);
