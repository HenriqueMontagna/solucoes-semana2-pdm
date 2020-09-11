import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, SafeAreaView, TextInput, FlatList, Text, View, ScrollView } from 'react-native';
import { ContatoItem } from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';

export default function App() {

  const [contatos, setContatos] = useState([]);
  
  const [key, setKey] = useState(10);

  const adicionarContato = (contato) => {
    if (contato.nome && contato.numero) {   
      setKey(key + 2);
      setContatos([...contatos, { "key": key, "nome": contato.nome, "numero": contato.numero }]) 
    }
  }

  const removerContato = (key) => {
    if (key){
      setContatos(
        (contatos) => {
          return contatos.filter( (contato) => {
            return contato.key !== key
          })
        }
      );
    }
  }

  return (
    <SafeAreaView style={styles.viewGeral}>

      <ContatoInput onAdicionarContato={adicionarContato} />

      <FlatList
        data={contatos}
        renderItem={(contato) => (<ContatoItem
          keyContato = {contato.item.key}
          nomeContato = {contato.item.nome}
          numeroContato = {contato.item.numero}
          onDelete = {removerContato}
        />
        )
      }
      />

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  viewGeral: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }

});
