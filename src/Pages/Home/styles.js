import { StyleSheet, Platform } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes'

export default StyleSheet.create({
  home: {
    flex: 1,
  },
  actionButton: {
    backgroundColor: Colors.lightviolet,
    width: 48,
    height: 48,
    borderRadius: 100,
    position: 'absolute',
    bottom: 16,
    right: 16,
    ...Metrics.flexMiddle,
    shadowColor: Colors.lightviolet,
    shadowOffset: { width: 2, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 4,
  },
})
