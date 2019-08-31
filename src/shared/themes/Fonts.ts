import Colors from './Colors';

const type = {
  bold: 'Roboto-Bold',
  medium: 'Roboto-Medium',
  regular: 'Roboto-Regular',
};

function header(fontFamily: string = 'regular') {
  return {
    color: Colors.primary,
    // fontFamily: type[fontFamily],
    fontSize: 22,
  };
}

function sectionTitle(fontFamily: string = 'regular') {
  return {
    color: Colors.mainBackground,
    // fontFamily: type[fontFamily],
    fontSize: 20,
  };
}

export default {
  header,
  sectionTitle,
};