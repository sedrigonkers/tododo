import React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
    Pressable,
} from 'react-native';
import Modal from 'react-native-modal'


const WriteTask = ({ dispatch, setModalVisible, modalVisible }) => {

    const [task, setTask] = React.useState('')

    const ADD_TASK = {
        type: 'add-task',
        payload: { text: task }
    }
    const handleAddTask = () => {
        dispatch(ADD_TASK)
        setTask('')
    }

    return (

        <Modal
            animationInTiming={50}
            animationOutTiming={50}
            avoidKeyboard={true}
            hasBackdrop={true}
            backdropOpacity={0.6}
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >

            <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>


                <View style={styles.modalContainer}>
                    <Pressable style={styles.modalWrapper} >

                        <TouchableOpacity style={styles.backArrow} onPress={() => setModalVisible(false)}>
                            <Image style={styles.backArrowIcon} source={require('../assets/icons/back_arrow.png')} />
                        </TouchableOpacity>

                        <View style={styles.inputWrapper}>
                            <TextInput
                                value={task}
                                style={styles.input}
                                placeholder='Write your task'
                                placeholderTextColor='#9f6868'
                                onChangeText={(text) => setTask(text)}
                                selectionColor='#9f6868'
                            />
                        </View>

                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.CancelButton} onPress={handleAddTask}>
                                <View style={styles.CancelIcon}>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.addTaskButton} onPress={handleAddTask}>
                                <View style={styles.addTaskIcon}>
                                    <Text style={styles.addTaskButtonText}>Add task</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Pressable>
                </View>
            </Pressable>

        </Modal>

    );
}

const styles = StyleSheet.create({

    buttons: {
        flexDirection: 'row'
    },

    modalOverlay: {
        flex: 1
    },

    modalContainer: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',

    },

    modalWrapper: {
        width: '80%',

        paddingVertical: 40,
        paddingVHorizontal: 40,

        backgroundColor: '#ffffff',

        borderRadius: 8,

        shadowColor: '#111111',
        shadowRadius: 15,
        shadowOpacity: 1,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        elevation: 3,

        justifyContent: 'center',
        alignItems: 'center',
    },

    inputWrapper: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 20
    },

    input: {
        fontSize: 16,
        fontFamily: 'RobotoRegular',

        color: '#343434',

        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#9F6868',

        paddingHorizontal: 20,
        paddingVertical: 10,

        width: '80%',
        marginBottom: 20,
    },

    addTaskButton: {
        display: 'flex',

        paddingVertical: 15,

        backgroundColor: '#9F6868',
        borderRadius: 8,

        alignItems: 'center',
        justifyContent: 'center',

        width: '80%'
    },

    addTaskButtonText: {
        color: '#FFFFFF',
        fontFamily: 'RobotoMedium',
        fontSize: 16
    },

    backArrow: {
        position: 'absolute',
        top: 15,
        left: 15,

        width: 40,
        height: 40,
    },

    backArrowIcon: {
        width: 30,
        height: 24,
    }
})

export default WriteTask;
