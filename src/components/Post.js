import React from "react"
import { View, Text, Image } from "react-native"
import { styles } from "../styles/App.styles.js"
import { SafeAreaView } from 'react-native-web'


export default function Post(props) {
    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <Image source={
                {uri: 'https://media.tenor.com/CWHdjtoLXToAAAAe/among-us.png'}} 
                style={styles.image} resizeMode="cover"></Image>
        </View>
    );
}