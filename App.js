import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import MovieDetailScreen from './src/screens/MovieDetailScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    MovieDetailScreen: MovieDetailScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Movies"
    }
  }
);

export default createAppContainer(navigator);
