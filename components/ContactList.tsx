import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contactList = [
        {
            uid: 1,
            name: 'Name 1',
            status: 'Test Case 1',
            imgUrl: 'https://plus.unsplash.com/premium_photo-1764501818547-52daac608a44?q=80&w=387&auto=format&fit=crop'
        },
        {
            uid: 2,
            name: 'Name 2',
            status: 'Test Case 2',
            imgUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=387&auto=format&fit=crop'
        },
        {
            uid: 3,
            name: 'Name 3',
            status: 'Test Case 3',
            imgUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop'
        },
        {
            uid: 4,
            name: 'Name 4',
            status: 'Test Case 4',
            imgUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=387&auto=format&fit=crop'
        },
        {
            uid: 5,
            name: 'Name 5',
            status: 'Test Case 5',
            imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop'
        },
        {
            uid: 6,
            name: 'Name 6',
            status: 'Test Case 6',
            imgUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=387&auto=format&fit=crop'
        },
        {
            uid: 7,
            name: 'Name 7',
            status: 'Test Case 7',
            imgUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop'
        },
        {
            uid: 8,
            name: 'Name 8',
            status: 'Test Case 8',
            imgUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=387&auto=format&fit=crop'
        },
        {
            uid: 9,
            name: 'Name 9',
            status: 'Test Case 9',
            imgUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=387&auto=format&fit=crop'
        }

    ];

    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <View>
                {contactList.map(({ uid, name, status, imgUrl }) => (
                    <View key={uid} style={styles.contactCard}>
                        <Image
                            source={({ uri: imgUrl })}
                            style={styles.image}
                        />
                        <View style={styles.cardContent}>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.desc}>{status}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    contactCard: {
        flex: 1,
        flexDirection: 'row',
        gap: 20,
        alignItems:'center',
        borderColor: 'black',
        borderWidth: 2,
        padding: 5,
        borderRadius: 6,
        marginBottom: 7,
        shadowOffset:{
            width:5,
            height:5
        },
        backgroundColor:'#758283'
    },
    userName:{
        fontSize:23,
        fontWeight:'500',
        color:'#000'
    },
    desc:{
        fontSize:17,
        color:'#ffffff'
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 50
    },
    cardContent: {
        flex: 1,
    }
})