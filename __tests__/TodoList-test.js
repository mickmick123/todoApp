import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from '../src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {render, fireEvent, cleanup} from '@testing-library/react-native';
import {TouchableOpacity} from 'react-native';

import TodoList from '../src/screens/TodoList';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
jest.mock('@react-navigation/bottom-tabs');
jest.mock('@react-navigation/native-stack');
jest.mock('react-native-vector-icons/AntDesign', () => 'Icon');
jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-form-validator', () => 'useValidation');

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});
jest.mock('redux-persist/integration/react', () => ({
  PersistGate: props => props.children,
}));
const navigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

const tree = render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <SafeAreaProvider>
        <TodoList navigation={navigation} />
      </SafeAreaProvider>
    </PersistGate>
  </Provider>,
);

describe('Test todo list page', () => {
  afterEach(cleanup);
  it('page is render', () => {
    expect(tree).toMatchSnapshot();
  });
  it('navigate to add task', async () => {
    const {findByTestId} = render(
      <TouchableOpacity
        testID="button"
        onPress={() => navigation.navigate('AddTask')}
      />,
    );
    const button = await findByTestId('button');
    fireEvent.press(button);
    expect(navigation.navigate).toBeCalledWith('AddTask');
  });
});
