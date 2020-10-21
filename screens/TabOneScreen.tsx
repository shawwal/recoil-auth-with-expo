import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useRecoilState } from 'recoil';
import { loginState } from './../hooks/atom';
import AsyncStorage from '@react-native-community/async-storage';

export default function TabOneScreen() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  const logoutFnc = async () => {
    try {
      await AsyncStorage.removeItem('@login_status');
      setIsLoggedIn(false);
    } catch (e) {
      // saving error
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.js" />
      <TouchableOpacity onPress={() => logoutFnc()}>
        <Text style={styles.title}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
