import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import CheckBox from 'expo-checkbox';

const Task = ({ dispatch, title, id }) => {

    const [isDone, setIsDone] = React.useState(false)

    const styles = StyleSheet.create({
        task: {
            width: '100%',

            backgroundColor: '#FFFFFF',
            borderColor: isDone ? '#d4d4d4' : '#9F6868',

            borderWidth: 2,
            borderRadius: 10,

            paddingHorizontal: 15,
            paddingVertical: 15,
            marginBottom: 10,

            justifyContent: 'space-between',

            alignItems: 'center',
            flexDirection: 'row',
        },
        taskText: {
            fontSize: 16,
            width: '75%',
            display: 'flex',
            fontFamily: 'RobotoRegular',
            flexWrap: 'wrap',
            opacity: isDone ? 0.3 : 1,
            color: '#343434',
        },

        deleteIcon: {
            width: 20,
            height: 20,
        },

        deleteButton: {
            marginLeft: 5,
            display: 'flex',
            width: 25,
            height: 25,
            alignItems: 'center',
            justifyContent: 'center',
        },

        icons: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1
        },

        checkbox: {
            width: 25,
            height: 25,
        }
    })

    const DELETE_TASK = {
        type: 'delete-task',
        payload: { id: id }
    }

    const handleDeleteTask = () => {
        dispatch(DELETE_TASK)
    }

    return (
        <View style={styles.task}>

            <Text style={styles.taskText}>{title}</Text>

            <View style={styles.icons}>
                <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteTask}>
                    <Image style={styles.deleteIcon} source={require('../assets/icons/trash.png')} />
                </TouchableOpacity>
                <CheckBox
                    value={isDone}
                    onValueChange={setIsDone}
                    style={styles.checkbox}
                    color='#9F6868'
                />
            </View>
        </View>
    );

}

export default Task;
