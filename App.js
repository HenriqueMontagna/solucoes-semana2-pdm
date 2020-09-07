import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, SafeAreaView, TextInput, FlatList, Text, View, ScrollView } from 'react-native';

export default function App() {

  const [nomeContato, setNomeContato] = useState("");

  const [numeroContato, setNumeroContato] = useState("");

  const [contatos, setContatos] = useState([]);

  const [contador, setContador] = useState(0);
  
  const [key, setKey] = useState(10);

  const capturarNome = (nomeContato) => {
    setNomeContato(nomeContato);
  }

  const capturarNumero = (numeroContato) => {
    setNumeroContato(numeroContato);
  };

  const adicionarContato = () => {
    if (nomeContato && numeroContato) {
      
      setKey(key + 2);

      setContatos([...contatos, { "key": key, "nome": nomeContato, "numero": numeroContato }])
      setNomeContato(''); setNumeroContato('')

      setContador(contador + 1);
      
    }
  }

  return (
    <SafeAreaView style={styles.viewGeral}>


      <View style={styles.viewInput}>

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

        <View>
          <Button
            style={styles.button}
            title="Adicionar"
            color="#FF8000"
            onPress={() => {
              adicionarContato()
            }}
          />
          <Text style={styles.contador}>Total de Contatos: {contador}</Text>
        </View>

      </View>


      <FlatList
        data={contatos}
        renderItem={(contato) => (
          <View style = {styles.itemList}>
            <Text style = {styles.itemListNome}>{contato.item.nome}</Text>
            <Text>{contato.item.numero}</Text>
          </View>
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

  button: {
    color: '#234678',
    backgroundColor: '#FF8000',
    paddingTop: 30
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
