import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const ContatoItem = (props) => {

    return (
        <TouchableOpacity onPress={() => {props.onDelete(props.keyContato)}}>
            <View style = {styles.itemList}>
                <Text style = {styles.itemListNome}>{props.nomeContato}</Text>
                <Text>{props.numeroContato}</Text>
            </View>
        </TouchableOpacity>
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