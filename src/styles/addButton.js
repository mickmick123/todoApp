import {StyleSheet} from 'react-native';
import {colors} from '../theme/color';
const styles = StyleSheet.create({
  btnStyle: {
    height: 50,
    width: '90%',
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: colors.tabBackGround,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: colors.textDim,
    fontWeight: '600',
  },
});

export default styles;
