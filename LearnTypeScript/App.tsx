import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './screens/RootStack';
import qs from 'qs';

function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
