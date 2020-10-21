import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../screens/LandingScreen';
import { LandingStackParamList } from '../types';


const Stack = createStackNavigator<LandingStackParamList>();

function LandingNavigator() {
  return (
    <Stack.Navigator
      headerMode="none"
    >
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
      />
    </Stack.Navigator>
  );
}

export default LandingNavigator;