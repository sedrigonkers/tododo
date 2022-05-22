import { View, Text, ScrollView, FlatList, SectionList, Button, TextInput } from 'react-native'
import React from 'react'
import styles from '../styles'
import Note from './Note'
import store from '.././store/state'
import reducer from '../store/reducer'


export default function Notes() {

    const [state, dispatch] = React.useReducer(reducer, store.getState())

    const [notesData, setNotesData] = React.useState([
        {
            title: 'To Do',
            data: [
                { title: 'Покорми собаку', content: 'насыпь ей кашу', id: 1 },
                { title: 'Свари ужин', content: 'рагу из кролика', id: 2 },
            ]
        },
        {
            title: 'Done',
            data: [
                { title: 'Приложение', content: 'Написать мобильное приложение на react native' },
                { title: 'Кровать', content: 'Заправить кровать' }
            ]
        }
    ])

    const inputRef = React.createRef()

    return (
        <View style={styles.notes}>
            <TextInput ref={inputRef} placeholder='your note'></TextInput>
            <Button
                style={styles.button}
                title='Add Note'
                onPress={() => {dispatch({type: 'ADD-NOTE', payload: inputRef.current.value})}}
                />
            <SectionList
                keyExtractor={(item, index) => index.toString()}
                sections={store.getSectionsState(state)}
                renderItem={(smth) => {
                    return <Note title={smth.item.title} content={smth.item.content} />
                }}
                renderSectionHeader={({ section }) => (
                    <Text>{section.title}</Text>
                )} />
            
        </View>
    )
}