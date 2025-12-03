import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import React from 'react'

const New = () => {
    return (
        <View>
            <Text style={{ color: "black", fontSize: 26, fontWeight: "bold",marginBottom:20, }}>Hello World</Text>
            <Image style={styles.image} source={{ uri: "https://images.unsplash.com/photo-1761839258289-72f12b0de058?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
            <TouchableOpacity style={styles.btn} onPress={() => Alert.alert("Pressed!")}
            ><Text style={{ color: "white", fontWeight: 400 }}>Press Me</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom:20
  },
  btn: {
    backgroundColor: "green",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    width: 100,
    marginBottom:20
  }
})
export default New