import { View, Text, ScrollView, FlatList, Button } from 'react-native'
import React from 'react'
import styles from '../styles'
import Note from './Note'

export default function Notes() {

    const [notes, setNotes] = React.useState([
        { title: 'Покорми собаку', content: 'насыпь ей кашу', id: 1 },
        { title: 'Свари ужин', content: 'рагу из кролика', id: 2 },
    ])

    return (
        <FlatList
            data={notes}
            renderItem={({ item }) => (
                <Note title={item.title} content={item.content}/>
            )} />
    )
}