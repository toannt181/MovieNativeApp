import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'

class MovieDetail extends PureComponent {
  static navigationOptions = {
    title: 'MovieDetail',
  }

  render() {
    const { navigation: { getParam } } = this.props
    return (
      <View>
        <Text>Movie detail</Text>
        <Text>{getParam('title', 'none')}</Text>
      </View>
    )
  }
}

export default MovieDetail
