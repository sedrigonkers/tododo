import { View, Text, ScrollView, FlatList, SectionList, Button } from 'react-native'
import React from 'react'
import styles from '../styles'
import Note from './Note'

export default function Notes() {

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

    return (
        <View style={styles.notes}>
            <SectionList
                keyExtractor={(item, index) => index.toString()}
                sections={notesData}
                renderItem={(smth) => {
                    return <Note title={smth.item.title} content={smth.item.content} />
                }}
                renderSectionHeader={({ section }) => (
                    <Text>{section.title}</Text>
                )}
            />
        </View>
    )
}