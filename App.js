import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import { useState } from 'react'
import { styles } from './src/styles/App.styles.js'
import Post from './src/components/Post.js'

export default function App() {
  const [posts, setPosts] = useState(
    Array.from({ length: 50 }, (_, i) => ({
      id: i.toString(),
      title: `Post do DOGE #${i + 1}`
    }))
  )

  const loadMorePosts = () => {
    const newPosts = Array.from({ length: 50 }, (_, i) => ({
      id: (posts.length + i).toString(),
      title: `Post do DOGE #${posts.length + i + 1}`
    }))
    setPosts([...posts, ...newPosts])
  }

  return (
    <View style={styles.back}>
      <StatusBar style="light" />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Post title={item.title} />}
          onEndReached={loadMorePosts}
          onEndReachedThreshold={0.2}
        />
      </KeyboardAvoidingView>
    </View>
  )
}


