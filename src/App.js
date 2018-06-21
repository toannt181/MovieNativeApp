import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import Home from './Pages/Home'
import MovieDetail from './Pages/MovieDetail'

export default createStackNavigator(
  {
    Home,
    MovieDetail,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)
