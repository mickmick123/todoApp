import {StyleSheet} from 'react-native';
import {colors} from '../theme/color';
const styles = StyleSheet.create({
  rowFront: {
    backgroundColor: colors.background,
    borderBottomColor: colors.separator,
    justifyContent: 'center',
    padding: 15,
  },
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  innerItem: {
    borderBottomWidth: 2,
    borderColor: colors.separator,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
  },
  itemTitle: {
    color: colors.textDim,
    fontWeight: '600',
  },
  itemTitleCompleted: {
    color: colors.completed,
    fontWeight: '600',
  },
  itemDescription: {
    color: colors.tint,
    fontSize: 12,
  },
  itemDescriptionCompleted: {
    color: colors.completed,
    fontSize: 12,
  },
  leftItem: {
    backgroundColor: 'blue',
    padding: 10,
    width: '40%',
  },
  rightItem: {
    backgroundColor: colors.error,
    padding: 10,
    width: '40%',
    alignItems: 'flex-end',
  },
  backItemText: {
    color: colors.textWhite,
    fontSize: 16,
    fontWeight: '600',
  },
  backRightBtn: {
    display: 'flex',
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backLeftBtn: {
    display: 'flex',
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    left: 0,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  instructionContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  instructionItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  instructionText: {
    fontSize: 12,
  },
});

export default styles;
