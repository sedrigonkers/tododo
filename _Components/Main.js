import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'
import Header from './Header'
import Notes from './Notes'
import AddNote from './AddNote'
import store from '../store/store'
import reducer from '../store/reducer'

function Main() {

    const [state, dispatch] = React.useReducer(reducer, store.getState())

    return (
        <View style={styles.container}>
            <Header />
            <AddNote dispatch={dispatch} state={state}/>
            <Notes dispatch={dispatch} state={state} sectionsData={{}}/>
        </View>
    )
}

export default Main