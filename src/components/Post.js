import React from "react"
import { View, Text, Image } from "react-native"
import { styles } from "../styles/App.styles.js"

export default function Post({ title }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Image 
        source={{ uri: 'https://media.tenor.com/CWHdjtoLXToAAAAe/among-us.png' }} 
        style={styles.image} 
        resizeMode="cover" 
      />
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend velit vel mattis imperdiet. Ut viverra pharetra turp
      </Text>
    </View>
  )
}