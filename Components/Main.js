import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'
import Header from './Header'
import Notes from './Notes'
import AddNote from './AddNote'


function Main() {
    return (
        <View style={styles.container}>
            <Header />
            <Notes />
            <AddNote />
        </View>
    )
}

export default Main