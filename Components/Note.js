import { View, Text } from 'react-native'
import styles from '../styles'
import React from 'react'
import CheckBox from 'expo-checkbox'

export default function Note({ title, content, id, dispatch }) {

  const [isDone, setIsDone] = React.useState(true)

  React.useEffect(() => {
    dispatch({ type: 'change-note-section', payload: { id: id } })

  }, [isDone])

  return (
    <View style={styles.noteContainer}>

      <Text style={styles.noteTitle}>
        {title}
      </Text>

      <Text style={styles.noteContent}>
        {content}
      </Text>

      <CheckBox
        style={styles.checkBox}
        value={isDone}
        onValueChange={setIsDone}
        color='#9F6868'
      />

    </View>
  )
}