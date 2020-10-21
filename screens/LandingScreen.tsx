import * as React from 'react';
import { RootStackParamList } from '../types';
import { Text, View } from '../components/Themed';
import { TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useRecoilState } from 'recoil';
import { loginState } from './../hooks/atom';
import AsyncStorage from '@react-native-community/async-storage';

type Props = StackScreenProps<RootStackParamList>;

function LandingScreen({ navigation }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const loginFnc = async () => {
    try {
      await AsyncStorage.setItem('@login_status', 'yes')
      setIsLoggedIn(true);
    } catch (e) {
      // saving error
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => loginFnc()}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LandingScreen;