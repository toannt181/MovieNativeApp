import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import styles from './styles'

const MovieItem = () => (
  <TouchableOpacity>
    <View style={styles.movieItem}>
      <View style={styles.imageView}>
        <Image source={require('Assets/red_dog.jpg')} style={styles.image} />
      </View>
      <View style={styles.movieDescription}>
        <Text style={styles.title}>Red Dog</Text>
        <Text style={styles.description}>An Australian dog unites</Text>
        <Text style={styles.author}>Kriv Stenders</Text>
        <Text style={styles.genre}>AACTA Award for Best Film</Text>
      </View>
      <View style={styles.timeView}>
        <Text style={styles.time}>10.48pm</Text>
      </View>
    </View>
  </TouchableOpacity>
)

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

  render() {
    return (
      <View style={styles.movieList}>
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => <MovieItem movie={item} />}
        />
      </View >
    )
  }
}

export default MovieList
