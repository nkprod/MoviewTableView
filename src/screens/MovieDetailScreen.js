import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar, Image } from "react-native";
import { Divider, Icon, Text } from 'react-native-elements'

const MovieDetailScreen = ({navigation}) => {
    const title = navigation.getParam('title', "title");
    const image = navigation.getParam('image', "image");
    const ranking = navigation.getParam('ranking', "ranking");
    const description = navigation.getParam('description', "description");
    const director = navigation.getParam('director', "director");
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <Text h4 style={styles.name}>
          {title}
        </Text>
        <Text style={styles.desc}>Ranking: {ranking}/10</Text>
        <Divider style={styles.divider} />
        <Text style={styles.desc}>
          {description}
        </Text>
        <Divider style={styles.divider} />
        <Text style={styles.desc}>Director: {director}</Text>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#FBF6D5"
  },
  imageContainer: {
    margin: 20,
  },
  image: {
    width: 300, // device width - some margin
    height: 500, // device height / 2 - some margin
    borderRadius: 30,
  },
  name: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  desc: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginHorizontal: 30,
    fontSize: 14,
  },
  divider: {
    backgroundColor: '#C0C0C0',
    width: '100%',
    margin: 20,
  },
  socialLinks: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    marginLeft: 40,
  },
  iconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
})

export default MovieDetailScreen;