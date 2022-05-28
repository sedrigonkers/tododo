import { View, Text, SectionList, Button, TextInput } from 'react-native'
import React from 'react'
import styles from '../styles'
import Note from './Note'

export default function Notes({ dispatch, state, sectionsData }) {

    return (
            <View style={styles.notes}>

                <SectionList
                    keyExtractor={(item, index) => index.toString()}
                    sections={sectionsData}
                    renderItem={({ item }) => <Note title={item.title} content={item.content} id={item.id} dispatch={dispatch} />}
                    renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
                />
                
            </View>
    )
}