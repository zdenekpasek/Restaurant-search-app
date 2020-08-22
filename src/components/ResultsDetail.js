import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.moreInfo}>
        {result.rating} Rating, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    height: 120,
    width: 200,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 10,
  },
  moreInfo: {
    fontSize: 12,
    color: "#919191",
  },
});

export default ResultsDetail;
