import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Modal, Button } from 'react-native';
import { BlurView } from 'expo-blur'
import moment from 'moment'


const Header = ({ modalVisible, setModalVisible }) => {

    const date = moment().format('ddd') + ', ' + moment().format('MMMM') + ' ' + moment().format('Do')

    return (
        <View style={styles.header}>

            <Text style={styles.date}>{date}</Text>

            <TouchableOpacity style={styles.addTaskButton} onPress={() => setModalVisible(!modalVisible)}>
                <Image style={styles.addTaskIcon} source={require('../assets/icons/undotted_pencil.png')} />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        fontFamily: 'PacificoRegular',
        paddingHorizontal: 20
    },

    date: {
        flex: 1,
        fontSize: 30,
        display: 'flex',
        fontFamily: 'RobotoBold',
        color: '#343434',
    },

    addTaskButton: {
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    addTaskIcon: {
        width: 25,
        height: 25,
    },

})

export default Header;