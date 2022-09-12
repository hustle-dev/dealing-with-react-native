import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {UserContextProvider} from './contexts/UserContext';
import RootStack from './screens/RootStack';

function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}

export default App;
