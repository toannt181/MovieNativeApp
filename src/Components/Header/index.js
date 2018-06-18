import React, { PureComponent } from 'react'
import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'

const data = ['Today', '24May', '26May', '27May', '29May', '30May', '1July', '12July']

class Header extends PureComponent {
  state = {
    selectedDay: 0,
  }

  pressDay = (selectedDay) => this.setState({ selectedDay })

  render() {
    const { selectedDay } = this.state
    return (
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 1.0 }}
        colors={['#845ec2', '#0085e4', '#00a2e5', '#00b9cc', '#00c9a7']}
        style={styles.header}
      >
        <View style={styles.nav}>
          <Icon name="align-justify" size={20} color='white' />
          <Text style={styles.title}>Home</Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.dateList}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {data.map((day, index) => (
            <TouchableWithoutFeedback key={index} onPress={() => this.pressDay(index)}>
              <View>
                <Text style={[styles.dateText, selectedDay === index && styles.dataTextFirstItem]}>
                  {day}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </LinearGradient>
    )
  }
}

export default Header
