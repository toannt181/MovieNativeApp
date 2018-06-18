const type = {
  base: 'Helvetica',
  bold: 'Roboto',
  emphasis: 'HelveticaNeue-Italic'
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 18,
  input: 18,
  regular: 16,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const style = {
  h1: {
    fontSize: size.h1,
    fontWeight: 'bold',
    fontFamily: type.base,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  medium: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  small: {
    fontFamily: type.base,
    fontSize: size.small
  }
}

export default {
  type,
  size,
  style
}
