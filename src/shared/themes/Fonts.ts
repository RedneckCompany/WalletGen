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
    color: Colors.main,
    // fontFamily: type[fontFamily],
    fontSize: 20,
  };
}

function text(fontFamily: string = 'regular') {
  return {
    color: Colors.primary,
    fontWeight: '600',
    // fontFamily: type[fontFamily],
    fontSize: 16,
  };
}

function textDark(fontFamily: string = 'regular') {
  return {
    color: Colors.darkPrimary,
    fontWeight: '600',
    // fontFamily: type[fontFamily],
    fontSize: 16,
  };
}

export default {
  header,
  sectionTitle,
  text,
  textDark,
};