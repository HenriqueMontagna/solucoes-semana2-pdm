import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { ContatoItem } from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';
import Navigator from './navegacao/navigator'


export default function App() {
    return <Navigator />

}