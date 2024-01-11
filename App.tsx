import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Navigation} from './src/navigation/Navigation';
import {GradientProvider} from './src/context/Gradient';
// import Fade from './src/screens/Fade';

const App = () => {
  return (
    <NavigationContainer>
      <GradientProvider>
        <Navigation />
        {/* <Fade /> */}
      </GradientProvider>
    </NavigationContainer>
  );
};

export default App;
