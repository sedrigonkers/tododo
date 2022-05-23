import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import styles from '../styles'

export default function AddNote({ dispatch, state }) {

  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')

  // React.useEffect(() => {
  //   setTitle(titleInputRef.current.value)
  // }, [titleInputRef])

  // React.useEffect(() => {
  //   setContent(contentInputRef.current.value)
  // }, [contentInputRef])

  const onPress = () => {
    dispatch({ type: 'add-note', payload: { title: title, content: content } })
  }

  return (
    <View>
      <TextInput value={title} placeholder='Title' onChangeText={(text) => setTitle(text)}></TextInput>
      <TextInput value={content} placeholder='Something important' onChangeText={(text) => setContent(text)}></TextInput>
      <Button
        style={styles.button}
        title='Add Note'
        onPress={onPress}
      />
    </View>
  )
}