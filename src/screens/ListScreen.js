import React from 'react';
import { View, FlatList, Text, StyleSheet} from 'react-native';
import MovieDetailScreen from './MovieDetailScreen'


const Item = ({ title,age,props }) => {
    const handleOnPress = () => {
        props.navigation.navigate('MovieDetailScreen',
        {title: title,});
    }
    return <View>
        <Text style = {styles.item} onPress={handleOnPress}> {title} - Ranking {age}/10</Text>
    </View>;
}

const ListScreen = props => {
    const friends = [{name: "Kill Bill", key: "1", age: 9}, 
    {name: "Jango", key: "2", age: 8},
    {name: "Kill Bill 2", key: "3", age: 7},
    {name: "Pulp Fiction", key: "4", age: 10},
    {name: "Once upon a time", key: "5", age: 8}];

    const renderItem = ({ item }) => {
        return <Item props = {props} title={item.name} age={item.age}/>; 
    };
    return <FlatList 
            showsHorizontalScrollIndicator={false}
            data = {friends} 
            renderItem = {renderItem}
         />;
}

const styles = StyleSheet.create({
    item: {
        fontSize: 24,
    }
});

export default ListScreen;

