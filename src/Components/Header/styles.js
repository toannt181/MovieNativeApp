import { StyleSheet, Platform } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes'

export default StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 24 : 0,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    zIndex: 1000,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 10,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: Fonts.size.h5,
    fontWeight: 'bold',
    color: 'white',
  },
  dateList: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },
  dateText: {
    ...Fonts.style.normal,
    marginRight: 16,
    color: 'white',
  },
  dataTextFirstItem: {
    fontSize: Fonts.size.h4,
    fontWeight: 'bold',
    color: 'white',
  }
})
