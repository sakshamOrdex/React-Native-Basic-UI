import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Flat Card</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.main}>
                    {/* <View style={styles.one}><Text>Red</Text></View>
                    <View style={styles.two}><Text>Yellow</Text></View>
                    <View style={styles.three}><Text>Green</Text></View>
                    <View style={styles.one}><Text>Red</Text></View>
                    <View style={styles.two}><Text>Yellow</Text></View>
                    <View style={styles.three}><Text>Green</Text></View>
                    <View style={styles.one}><Text>Red</Text></View>
                    <View style={styles.two}><Text>Yellow</Text></View>
                    <View style={styles.three}><Text>Green</Text></View> */}
                    <Image style={styles.box} source={require('../assets/One.png')}/>
                    <Image style={styles.box} source={require('../assets/Two.png')}/>
                    <Image style={styles.box} source={require('../assets/Three.png')}/>
                    <Image style={styles.box} source={require('../assets/Four.png')}/>
                    <Image style={styles.box} source={require('../assets/Five.png')}/>
                    <Image style={styles.box} source={require('../assets/Six.png')}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default FlatCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    main: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
    },
    box:{
        height:100,
        width:100
    },
    one: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 4,
    },
    two: {
        width: 100,
        height: 100,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 4,
    },
    three: {
        width: 100,
        height: 100,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 4,
    },
})