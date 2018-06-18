import { StyleSheet, Platform } from 'react-native'
import { Fonts, Colors } from 'Themes'

export default StyleSheet.create({
  movieList: {
    flex: 1,
  },
  movieItem: {
    flexDirection: 'row',
    margin: 8,
    marginTop: 16,
  },
  imageView: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 10,
  },
  timeView: {
    position: 'absolute',
    bottom: 0,
    left: 8,
  },
  time: {
    ...Fonts.style.medium,
    fontWeight: 'bold',
    color: Colors.grey,
  },
  image: {
    width: 112,
    height: 112,
    borderRadius: 8,
  },
  movieDescription: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 8,
    paddingLeft: 56,
    marginTop: 16,
    marginLeft: 80,
    backgroundColor: Colors.white,
    borderRadius: 4,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
  },
  title: {
    ...Fonts.style.h5,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  description: {
    ...Fonts.style.medium,
    color: Colors.grey,
    marginBottom: 16,
  },
  author: {
    ...Fonts.style.medium,
  },
  genre: {
    ...Fonts.style.small,
  },
  button: {
    backgroundColor: Colors.lightblue,
    paddingVertical: 0,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  iconButton: {
    color: Colors.white,
  },
})
