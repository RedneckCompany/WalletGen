import Colors from './Colors';

const type = {
  bold: 'Roboto-Bold',
  medium: 'Roboto-Medium',
  regular: 'Roboto-Regular',
};

function top(fontFamily: string = 'regular') {
  return {
    color: Colors.primary,
    // fontFamily: type[fontFamily],
    fontSize: 22,
  };
}
export default {
  top,
};