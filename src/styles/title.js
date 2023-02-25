import {StyleSheet} from 'react-native';
import {colors} from '../theme/color';
const styles = StyleSheet.create({
  titleBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '20%',
  },
  titleText: {
    fontWeight: '600',
    fontSize: 40,
    color: colors.text,
  },
});

export default styles;
