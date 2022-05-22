import { View, Text } from 'react-native'
import styles from '../styles'
import React from 'react'
import CheckBox from 'expo-checkbox'

export default function Note(props) {

  const [value, setValue] = React.useState(true)

  return (
    <View style={styles.noteContainer}>
      <Text style={styles.noteTitle}>
        {props.title || <Text>component doesn't have data to show</Text>}
      </Text>
      <Text style={styles.noteContent}>
        {props.content || <Text>component doesn't have data to show</Text>}
      </Text>
      <CheckBox
        value={value}
        onValueChange={setValue}
        color='#9F6868'
      />
    </View>
  )
}