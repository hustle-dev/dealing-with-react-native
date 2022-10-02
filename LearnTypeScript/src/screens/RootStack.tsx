import {RouteProp, useRoute} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import MainTab, {MainTabNavigationScreenParams} from './MainTab';

// RootStackParamList 타입을 선언할 때는 interface가 아닌 type을 사용해야함!
type RootStackParmList = {
  MainTab: MainTabNavigationScreenParams;
  Detail: {
    id: number;
  };
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParmList>;

const Stack = createNativeStackNavigator<RootStackParmList>();

// 첫 번째 제네릭은 현재 사용 중인 내비게이션의 라우트 파라미터 타입을 위해 선언한
// RootStackParamList가 들어간다.
// 두 번째는 화면 이름이 들어감
type DetailScreenRouteProp = RouteProp<RootStackParmList, 'Detail'>;

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
        options={{headerShown: false}}
      />
      <Stack.Screen component={DetailScreen} name="Detail" />
    </Stack.Navigator>
  );
}

export default RootStack;
