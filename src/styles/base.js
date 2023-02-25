import {StyleSheet} from 'react-native';
import {colors} from '../theme/color';
const styles = StyleSheet.create({
  baseFlex: {
    flex: 1,
  },
  tabBackground: {
    backgroundColor: colors.tabBackGround,
    paddingBottom: 3,
  },
  containerStyle: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  keyboardAvoidingViewStyle: {
    flex: 1,
  },
  outerStyle: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  innerStyle: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  headerImage: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  textInput: {
    width: '90%',
    height: 45,
    backgroundColor: colors.textInput,
    borderRadius: 10,
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textInputMulti: {
    backgroundColor: colors.textInput,
    width: '90%',
    borderRadius: 10,
    marginTop: 10,
  },
  addContainer: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
  },
  checkBoxContainer: {
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 20,
  },
  errorContainer: {
    width: '90%',
    height: 20,
  },
  errorMessage: {
    color: colors.error,
    fontSize: 12,
    fontStyle: 'italic',
  },
  defaultList: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultListText: {
    fontSize: 30,
  },
});

export default styles;
