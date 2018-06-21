import React, { PureComponent } from 'react'
import { View, Text, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createStackNavigator } from 'react-navigation'
import styles from './styles'
import Header from '../../Components/Header'
import MovieItem from './MovieList'

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

class Home extends PureComponent {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.home}>
        <Header />
        <Button title="click" onPress={() => navigation.navigate('MyModal')} />
        <MovieItem navigation={navigation} />
        <View style={styles.actionButton}>
          <Icon name="search" size={16} color='white' />
        </View>
      </View>
    )
  }
}

// export default Home
export default createStackNavigator(
  {
    Main: {
      screen: Home,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
