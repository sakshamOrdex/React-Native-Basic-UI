// DetailsScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { RootStackParamList } from '../App';

// type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;
type Props = BottomTabScreenProps<RootStackParamList, 'Details'>;
export default function DetailsScreen({ navigation, route }: Props) {
  const { itemId, name } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: name ? `${name}'s Details` : 'Details',
    });
  }, [name, navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18 }}>Details Screen</Text>

      <Text>Item ID: {itemId}</Text>
      <Text>Name: {name}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />

      <Button
        title="Replace with Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
