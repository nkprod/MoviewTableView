import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import MovieDetailScreen from "./MovieDetailScreen";
import facebook from "../api/facebook";
import useResults from "../hooks/useResults";

const Item = ({ navigation, item, image }) => {
  const handleOnPress = () => {
    navigation.navigate("MovieDetailScreen", {
      title: item.title,
      year: item.releaseYear,
      image: image[0].imageURL,
    });
  };

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider />

        <Card.Image
          source={{ uri: image[0].imageURL }}
          style={{ resizeMode: "contain" }}
        ></Card.Image>
      </Card>
    </TouchableOpacity>
  );
};

const ListScreen = (props) => {
  const images = [
    {
      title: "Star Wars",
      imageURL:
        "https://cdn.pocket-lint.com/r/s/1200x/assets/images/147767-tv-feature-what-order-should-you-watch-all-the-star-wars-films-image1-1wdfjceytb.jpg",
    },
    {
      title: "Back to the Future",
      imageURL:
        "https://images.squarespace-cdn.com/content/v1/5c62c09c4d546e27dc1016c7/1558007395695-IBEQBOGQRZBM35QEOQUY/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmihaE5rlzFBImxTetd_yW5btdZx37rH5fuWDtePBPDaHF5LxdCVHkNEqSYPsUQCdT/Back+to+the+Future+The+Musical+Instagram.jpg?format=500w",
    },
    {
      title: "The Matrix",
      imageURL:
        "https://static.wikia.nocookie.net/superheroes/images/6/64/4134793-neo%2Bof%2Bmatrix.jpg/revision/latest/scale-to-width-down/340?cb=20171029015857",
    },
    {
      title: "Inception",
      imageURL:
        "https://s.yimg.com/lo/api/res/1.2/G46xps5z35XFyXm1z.mzeg--/YXBwaWQ9YXBlY21lZGlhO3NtPTE7dz04MDA-/https://media.zenfs.com/en/the_hive_asia_947/2abad3c599b92fca6e8ce023340a206c",
    },
    {
      title: "Interstellar",
      imageURL:
        "https://www.newstatesman.com/sites/default/files/styles/cropped_article_image/public/blogs_2014/11/2014_44_interstellar_film_still.jpg?itok=k0YgBmLF",
    },
  ];
  const [searchApi, results, errorMessage] = useResults();
  const filterImage = (title) => {
    return images.filter((movie) => {
      return movie.title == title;
    });
  };
  const renderItem = ({ item }) => {
    return (
      <>
        <Item
          item={item}
          navigation={props.navigation}
          image={filterImage(item.title)}
        />
      </>
    );
  };
  return (
    <SafeAreaView style={styles.itemContainer}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: "#FBF6D5",
    justifyContent: "space-evenly",
  },
  item: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default ListScreen;
