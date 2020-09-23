import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import Cores from '../constantes/Cores';
import ContatoInputTela from '../telas/ContatoInputTela';
import ListaDeContatosTela from '../telas/ListaDeContatosTela';

const Navigator = createStackNavigator({
  ListaDeContatos: ListaDeContatosTela,
  NovoContato: ContatoInputTela,
}, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Cores.primary
      },
      headerTintColor: '#FFFFFF'
    }
  }
);

export default createAppContainer(Navigator);