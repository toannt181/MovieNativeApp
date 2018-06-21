import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'

import MovieItem from './MovieItem'
import styles from './styles'

const data = [
  { img: 'Assets/red_dog.jpg', title: 'Red Dog', description: 'An Australian dog unites', author: 'Kriv Stenders', genre: 'AACTA Award for Best Film', time: '10.48pm' },
  { img: 'Assets/red_dog.jpg', title: 'Red Dog', description: 'An Australian dog unites', author: 'Kriv Stenders', genre: 'AACTA Award for Best Film', time: '10.48pm' },
  { img: 'Assets/red_dog.jpg', title: 'Red Dog', description: 'An Australian dog unites', author: 'Kriv Stenders', genre: 'AACTA Award for Best Film', time: '10.48pm' },
  { img: 'Assets/red_dog.jpg', title: 'Red Dog', description: 'An Australian dog unites', author: 'Kriv Stenders', genre: 'AACTA Award for Best Film', time: '10.48pm' },
  { img: 'Assets/red_dog.jpg', title: 'Red Dog', description: 'An Australian dog unites', author: 'Kriv Stenders', genre: 'AACTA Award for Best Film', time: '10.48pm' },
  { img: 'Assets/red_dog.jpg', title: 'Red Dog', description: 'An Australian dog unites', author: 'Kriv Stenders', genre: 'AACTA Award for Best Film', time: '10.48pm' },
  { img: 'Assets/red_dog.jpg', title: 'Red Dog', description: 'An Australian dog unites', author: 'Kriv Stenders', genre: 'AACTA Award for Best Film', time: '10.48pm' },
  { img: 'Assets/red_dog.jpg', title: 'Red Dog', description: 'An Australian dog unites', author: 'Kriv Stenders', genre: 'AACTA Award for Best Film', time: '10.48pm' },
  { img: 'Assets/red_dog.jpg', title: 'Red Dog', description: 'An Australian dog unites', author: 'Kriv Stenders', genre: 'AACTA Award for Best Film', time: '10.48pm' },
]

class MovieList extends PureComponent {
   keyExtractor = (item, index) => item.title + index

  onPressItem = (params) => {
    const { navigation } = this.props
    navigation.navigate('MovieDetail', params)
  }

  render() {
    return (
      <View style={styles.movieList}>
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => <MovieItem movie={item} onPressItem={this.onPressItem} />}
        />
      </View >
    )
  }
}

export default MovieList
