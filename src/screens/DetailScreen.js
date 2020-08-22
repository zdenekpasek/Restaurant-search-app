import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import yelp from "../api/yelp";
import { FlatList } from "react-native-gesture-handler";

const DetailScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <Text style={styles.titleStyle}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Image style={styles.imageStyle} source={{ uri: item }} />
            </View>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 5,
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  imageStyle: {
    width: 320,
    height: 200,
    marginBottom: 20,
    borderRadius: 4,
  },
});
export default DetailScreen;
