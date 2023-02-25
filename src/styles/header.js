import {StyleSheet} from 'react-native';
import {colors} from '../theme/color';
const styles = StyleSheet.create({
  header: {
    height: 250,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerNoTab: {
    height: 250,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recordedTasks: {
    height: 40,
    width: '90%',
    marginTop: 100,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  taskCountTotal: {
    color: colors.error,
    fontSize: 14,
    fontWeight: 'bold',
  },
  taskCountHeader: {
    fontSize: 12,
    color: colors.tab,
  },
  sortButton: {
    left: 0,
  },
});

export default styles;
