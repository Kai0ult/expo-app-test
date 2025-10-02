import { StatusBar } from 'expo-status-bar'
import { Pressable, TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from './src/styles/App.styles'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { click } from './src/features/buttonClick'
import { Fragment, useState } from 'react'
import Post from './src/components/Post.js'


export default function App() {
  const [count, setCount] = useState(0)
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.scrollView}>
        <Post title="Dog do MEME"></Post> 
        <Post title="Dog do MEME"></Post> 
        <Post title="Dog do MEME"></Post> 
        <Post title="Dog do MEME"></Post> 
        <Post title="Dog do MEME"></Post> 
        <Post title="Dog do MEME"></Post> 
        <Post title="Dog do MEME"></Post> 
        <Post title="Dog do MEME"></Post> 
        <Post title="Dog do MEME"></Post> 
        <Post title="Dog do MEME"></Post>    
        
        {/*<View>
          <Text style={styles.title}>Valor: {count}</Text>
          <View>
            <StatusBar style="light" />
            <TouchableOpacity style={styles.button1} onPress={() => click("mais", count, setCount)}>
              <Text style={styles.titleButton}>+</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.button2} onPress={() => click("menos", count, setCount)}>
              <Text style={styles.titleButton}>-</Text>
            </TouchableOpacity>
          </View>
        </View>*/}

      </ScrollView>
    </KeyboardAvoidingView>
  )
}


