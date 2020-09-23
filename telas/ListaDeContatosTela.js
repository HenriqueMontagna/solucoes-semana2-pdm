import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Platform } from 'react-native';
import { ContatoItem } from '../components/ContatoItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton1 from '../components/HeaderButton';

const ListaDeContatosTela = (props) => {

  const [contatos, setContatos] = useState([]);
  const [key, setKey] = useState(10);

  useEffect(() => {
    props.navigation.setParams({onAddContact: adicionarContato})
  }, [contatos]);

  const adicionarContato = (contato) => {
    if (contato.nomeContato && contato.numeroContato) {   
      setKey(key + 2);
      setContatos([...contatos, { "key": key.toString(), value: contato }]) 
    }
  }

  return (
    <SafeAreaView style={styles.viewGeral}>

      <FlatList
        data={contatos}
        renderItem={(contato) => (<ContatoItem 
          nomeContato = {contato.item.value.nomeContato}
          numeroContato = {contato.item.value.numeroContato}
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

export default ListaDeContatosTela;

ListaDeContatosTela.navigationOptions = options => {
    return {
        headerTitle: 'Contatos',
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton1}>
                    <Item 
                        title="Adicionar"
                        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                        onPress={ () => {
                                options.navigation.navigate('NovoContato', {onAddContact: options.navigation.getParam('onAddContact')})
                        }}
                    />

                </HeaderButtons>
            )
        }
    }

}