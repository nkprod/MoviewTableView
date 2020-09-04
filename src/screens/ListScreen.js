import React from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MovieDetailScreen from './MovieDetailScreen';


const Item = ({ title,ranking,props,imageUrl,description,director }) => {
    const handleOnPress = () => {
        props.navigation.navigate('MovieDetailScreen',
        {title: title,
        image: imageUrl,
        ranking: ranking,
        description: description,
        director: director,});
    }
    // return (<View style={{alignContent: 'stretch', justifyContent: 'center', backgroundColor: 'orange'}}>
    // <TouchableOpacity onPress={handleOnPress}>
    // <Text style = {styles.item} > {title} - Ranking {age}/10</Text>
    // <Image 
    // style={{ width: 400, maxHeight: 500, resizeMode: 'contain'}}
    // source = {imageUrl}>
        
    // </Image>
    // </TouchableOpacity>
    // </View>);
    return (
        <TouchableOpacity onPress={handleOnPress}>
        <Card>
        <Card.Title>{title}</Card.Title>
        <Card.Divider/>
        <Card.Image source = {imageUrl} style={{ resizeMode: 'contain'}}>
            <Text style={{marginBottom: 10}}>
            
            </Text>
        </Card.Image>
        </Card>
        </TouchableOpacity>);
}

const ListScreen = props => {
    const friends = [{name: "Kill Bill", key: "1", ranking: 8.1,
    director: "Quentin Tarantino",
    description: "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
    imageURL: require('/Users/nulrybekkarshyga/Desktop/React_Native/MoviewTableView/assets/kill_bill.jpg')}, 
    {name: "Django", key: "2", ranking: 8,
    director: "Quentin Tarantino",
    description: "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
    imageURL: require('/Users/nulrybekkarshyga/Desktop/React_Native/MoviewTableView/assets/django.jpg')}, 
    {name: "Kill Bill 2", key: "3", ranking: 7,
    director: "Quentin Tarantino",
    description: "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
    imageURL: require('/Users/nulrybekkarshyga/Desktop/React_Native/MoviewTableView/assets/kill_bill_2.jpg')}, 
    {name: "Pulp Fiction", key: "4", ranking: 10,
    director: "Quentin Tarantino",
    description: "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
    imageURL: require('/Users/nulrybekkarshyga/Desktop/React_Native/MoviewTableView/assets/pulp_fiction.jpg')}, 
    {name: "Once upon a time", key: "5", ranking: 8,
    director: "Quentin Tarantino",
    description: "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
    imageURL: require('/Users/nulrybekkarshyga/Desktop/React_Native/MoviewTableView/assets/unce_upon_time.jpg')}];

    const renderItem = ({ item }) => {
        return <Item props = {props} 
        title={item.name} 
        ranking={item.ranking} 
        imageUrl = {item.imageURL} 
        description = {item.description}
        director = {item.director}/>; 
    };
    return(
        <SafeAreaView style={styles.itemContainer}>
        <FlatList 
            
            showsHorizontalScrollIndicator={false}
            data = {friends} 
            renderItem = {renderItem}
         />
         </SafeAreaView>
);
}

const styles = StyleSheet.create({
    itemContainer: {
        flex:1,
         backgroundColor: '#FBF6D5',
         justifyContent: "space-evenly",
        
    },
    item: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
    }
});

export default ListScreen;

