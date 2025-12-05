import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function RollTheDice() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image style={styles.box} source={require('../assets/One.png')}/>
        <View style={styles.btn}>
          <TouchableOpacity>
            <Text>RollTheDice</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap:20
  },
  box: {
    height: 100,
    width: 100,
  },
  btn:{
    borderWidth:2,
    borderColor:'gray',
    padding:3
  }
})