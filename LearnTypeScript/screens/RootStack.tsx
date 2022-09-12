import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import MainTab, {MainTabNavigationScreenParams} from './MainTab';

type RootStackParamList = {
  MainTab: MainTabNavigationScreenParams;
  Detail: {
    id: number;
  };
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

function HomeScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const onPress = () => {
    navigation.navigate('Detail', {id: 1});
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="Open Detail" onPress={onPress} />
    </View>
  );
}

function DetailScreen() {
  const {params} = useRoute<DetailScreenRouteProp>();
  return (
    <View>
      <Text>Detail {params.id}</Text>
    </View>
  );
}

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={MainTab}
        name="MainTab"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen component={DetailScreen} name="Detail" />
    </Stack.Navigator>
  );
}

export default RootStack;
