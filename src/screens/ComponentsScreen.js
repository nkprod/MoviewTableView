import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const ComponentsScreen = () => {
    const name = <Text style = {{ fontSize: 25}}>Nurlybek</Text>;
    return <View>
            <Text style = {{ fontSize: 45}}> This is Compnonents Screen </Text>
            {name}
        </View>
};


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsScreen;