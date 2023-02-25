import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import Entry from './src/entry';
import {Text} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Entry />
      </PersistGate>
    </Provider>
  );
};

export default App;
