// import { Text, View, Image, TouchableOpacity, Alert, StyleSheet, useColorScheme, ScrollView } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import New from './components/New';
// import FlatCard from './components/FlatCard';
// import Card from './components/Card';
// import ActionCard from './components/ActionCard';
// import ContactList from './components/ContactList';
// import RollTheDice from './components/RollTheDice';

// const App = () => {
//   const theme = useColorScheme() === 'dark';
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>

//         <New />

//         <FlatCard />

//         <Card />

//         <ActionCard />

//         <ContactList />

//         {/* <RollTheDice /> */}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     paddingVertical: 2,
//     paddingHorizontal: 10,
//     gap: 10,
//     height: "100%",
//   },
// })
// export default App



// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export type RootStackParamList = {
  Home: undefined;
  Details: {
    itemId: number;
    name: string;
  };
};

// const Stack = createNativeStackNavigator<RootStackParamList>();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const Tab = createBottomTabNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen
          name='Home'
          component={HomeScreen}
        />
        <Tab.Screen
          name='Details'
          component={DetailsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}