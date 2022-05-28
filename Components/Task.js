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

            paddingHorizontal: 20,
            paddingVertical: 20,
            marginBottom: 15,

            justifyContent: 'space-between',

            alignItems: 'center',
            flexDirection: 'row',
        },
        taskText: {
            fontSize: 16,
            width: '80%',
            display: 'flex',
            fontFamily: 'RobotoRegular',
            flexWrap: 'wrap',
            opacity: isDone ? 0.3 : 1
        },
        deleteIcon: {
            width: 20,
            height: 20,
        },
        deleteButton: {
            display: 'flex',
            width: 20,
            height: 20,
        },

        icons: {
            flexDirection: 'row',
            alignItems: 'center'
        },

        checkbox: {
            marginLeft: 15,
            width: 22,
            height: 22,
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
