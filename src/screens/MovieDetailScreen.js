import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from "react-native";


const MovieDetailScreen = ({navigation}) => {
    const title = navigation.getParam('title', "title");
  return (
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 32,
  },
});

export default MovieDetailScreen;