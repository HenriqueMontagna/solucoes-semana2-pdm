import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, SafeAreaView, TextInput, FlatList, Text, View, ScrollView } from 'react-native';
import { ContatoItem } from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';

export default function App() {

  // const [nomeContato, setNomeContato] = useState("");

  // const [numeroContato, setNumeroContato] = useState("");

  const [contatos, setContatos] = useState([]);
  
  const [key, setKey] = useState(10);

  // const capturarNome = (nomeContato) => {
  //   setNomeContato(nomeContato);
  // }

  // const capturarNumero = (numeroContato) => {
  //   setNumeroContato(numeroContato);
  // };

  const adicionarContato = (contato) => {
    if (contato.nome && contato.numero) {   
      setKey(key + 2);
      setContatos([...contatos, { "key": key, "nome": contato.nome, "numero": contato.numero }]) 
    }
  }

  return (
    <SafeAreaView style={styles.viewGeral}>

      <ContatoInput onAdicionarContato={adicionarContato} />

      {/* <View style={styles.viewInput}>

        <TextInput
          placeholder="Nome do Contato"
          placeholderTextColor="#888"
          textAlign="center"
          style={styles.textInput}
          onChangeText={capturarNome}
          value={nomeContato}
        />

        <TextInput
          placeholder="Numero do Contato"
          placeholderTextColor="#888"
          textAlign="center"
          style={styles.textInput}
          onChangeText={capturarNumero}
          value={numeroContato}
        />

          <Button
            title="Adicionar"
            color="#FF8000"
            onPress={() => {
              adicionarContato()
            }}
          />


      </View> */}


      <FlatList
        data={contatos}
        renderItem={(contato) => (<ContatoItem 
          nomeContato = {contato.item.nome}
          numeroContato = {contato.item.numero}
        />
        )
      }
      />


      {/*
      <ScrollView>
        {contatos.map(
          (contato) => {
            return (
              <View key={contato.numero} style = {styles.itemList}>
                <Text style = {styles.itemListNome}>{contato["nome"]}</Text>
                <Text>{contato["numero"]}</Text>
              </View>
            )
          }
        )}
      </ScrollView>   */}

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  viewGeral: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },

  viewInput: {
    padding: 10,
    marginTop: 35,
    borderWidth: 2,
    borderColor: '#FAB953'
  },

  textInput: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 15
  },

  itemList: {
    margin: 10,
    padding: 30,
    backgroundColor: '#FFE4B5'
  },

  itemListNome: {
    fontSize: 25
  },

  contador: { 
    textAlign: 'center', 
    fontSize: 20, 
    marginTop: 10 
  }

});
