import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
// import FaAlignJustify from 'react-icons/lib/fa/align-justify'
import { FaBeer } from 'react-icons/lib/fa';
class Header extends PureComponent {
  render() {
    return (
      <View>
        <Text>haha <FaBeer /></Text>
      </View>
    )
  }
}

export default Header
