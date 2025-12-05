import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// 1️⃣ Define all routes in the stack
type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number; name?: string };
};

// 2️⃣ Define the navigation prop type for this screen
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

// 3️⃣ Apply the type to the screen props
type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Home Screen</Text>

      <Button
        title="Go to Details (with params)"
        onPress={() =>
          navigation.navigate('Details', {name: 'Saksham',itemId: 42})
        }
      />

      <Button
        title="Open Details (push)"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
    </View>
  );
}
