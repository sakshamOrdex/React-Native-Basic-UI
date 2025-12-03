import { Image, StyleSheet, Text, View, ScrollView, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ActionCard() {
    function openWebsite(websiteUrl:string){
        Linking.openURL(websiteUrl);
    }
    return (
        <View>
            <Text style={styles.headingText}>Action Card</Text>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: "https://images.unsplash.com/photo-1695395550316-8995ae9d35ff?q=80&w=856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
                <View style={styles.links}>
                <Text style={{color:"blue",textDecorationLine:'underline'}}>Get Direction</Text>
                <TouchableOpacity onPress={()=>openWebsite('https://reuniteit.onrender.com/')}>
                    <Text style={{color:"blue",textDecorationLine:'underline'}}>Get Link</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        borderColor: "black",
        borderWidth: 3,
        padding: 5,
        marginBottom:20,
    },
    headingText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    image: {
        width: 180,
        height:150,
        borderRadius: 15,
        marginBottom: 20
    },
    links:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly'
    }
})