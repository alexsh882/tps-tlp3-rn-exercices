
import { ScaledSheet } from 'react-native-size-matters';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import { HomeScreen, DetailsScreen, PostScreen, ConfigScreen } from './src/screens/screens';

import { CharactersContextProvider } from './src/contexts/CharactersContext';

const Tabs = createBottomTabNavigator();

export default function App() {

  return (
    <CharactersContextProvider>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen options={
            {
              title: 'Lista de Personajes de Rick and Morty',
              tabBarIcon: ({ color, size }) => <Ionicons name={'home'} size={size} color={color} />
            }
          } name="Home" component={HomeScreen} />
          <Tabs.Screen options={
            ({ route }) => ({
              title: route.params?.titleName ?? 'Detalles',
              tabBarIcon: ({ color, size }) => <Ionicons name={'shapes'} size={size} color={color} />
            })

          } name="Details" component={DetailsScreen} />
          <Tabs.Screen options={
            {
              title: 'Publicaciones',
              tabBarIcon: ({ color, size }) => <Ionicons name={'aperture'} size={size} color={color} />
            }
          } name="PostScreen" component={PostScreen} />
          <Tabs.Screen options={
            {
              title: 'Configuración',
              tabBarIcon: ({ color, size }) => <Ionicons name={'settings'} size={size} color={color} />
            }
          } name="ConfigScreen" component={ConfigScreen} />
        </Tabs.Navigator>
      </NavigationContainer>
    </CharactersContextProvider>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  }
});
