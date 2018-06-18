import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Home from './Pages/Home'
import { Colors } from './Themes'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
})
