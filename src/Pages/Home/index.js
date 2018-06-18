import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

import Header from '../../Components/Header'
import MovieList from './MovieList'

class Home extends PureComponent {
  render() {
    return (
      <View style={styles.home}>
        <Header />
        <MovieList />
        <View style={styles.actionButton}>
          <Icon name="search" size={16} color='white' />
        </View>
      </View>
    )
  }
}

export default Home
