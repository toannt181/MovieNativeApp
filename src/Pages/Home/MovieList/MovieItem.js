import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

class MovieItem extends PureComponent {
  handleOnPressItem = () => {
    const { onPressItem, movie } = this.props
    onPressItem(movie)
  }

  render() {
    const { movie: { title, description, author, genre, time }, onPressItem } = this.props
    return (
      <TouchableOpacity onPress={this.handleOnPressItem}>
        <View style={styles.movieItem}>
          <View style={styles.imageView}>
            <Image source={require('Assets/red_dog.jpg')} style={styles.image} />
          </View>
          <View style={styles.movieDescription}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.genre}>{genre}</Text>
          </View>
          <View style={styles.timeView}>
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default MovieItem
