import { View, Text } from 'react-native'
import styles from '../styles'
import React from 'react'

export default function Note(props) {
  return (
    <View style={styles.noteContainer}>
        <Text style={styles.noteTitle}>
            {props.title}
        </Text>
        <Text style={styles.noteContent}>
            {props.content}
        </Text>
    </View>
  )
}