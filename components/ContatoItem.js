import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const ContatoItem = (props) => {

    return (
        <View style = {styles.itemList}>
            <Text style = {styles.itemListNome}>{props.nomeContato}</Text>
            <Text>{props.numeroContato}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    itemList: {
        margin: 10,
        padding: 30,
        backgroundColor: '#FFE4B5'
    },

    itemListNome: {
        fontSize: 25
    },

});

export {ContatoItem};