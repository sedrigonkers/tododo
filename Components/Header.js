import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import moment from 'moment'


const Header = () => {

    const date = moment().format('ddd') + ', ' + moment().format('MMMM') + ' ' + moment().format('Do')

    return (
        <View style={styles.header}>

            <Text style={styles.date}>{date}</Text>
            <TouchableOpacity style={styles.more} onPress={() => { }}>
                <Image style={styles.icon} source={require('../assets/icons/more.png')} />
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
    },

    date: {
        fontSize: 24,
        display: 'flex',
        fontFamily: 'PacificoRegular'
    },

    more: {
        width: 25,
        height: 20,
        display: 'flex',
    },

    icon: {
        width: 25,
        height: 20,
    },
})

export default Header;