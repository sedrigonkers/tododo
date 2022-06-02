import React from 'react'
import {
  View,
  StyleSheet,
  Keyboard,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  FlatList,
  Modal,
  Text,
  Button,
  Image,
  TouchableOpacity
} from 'react-native'

import { useFonts } from 'expo-font'
import { BlurView } from 'expo-blur'
import Header from './Components/Header'
import Task from './Components/Task'
import WriteTask from './Components/WriteTask'

const windowHeight = Dimensions.get('window').height

export default function App() {

  function reducer(state, action) {

    const generateId = () => (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, "")

    switch (action.type) {

      case 'add-task':
        const { text } = action.payload

        if (text.trim()) {
          Keyboard.dismiss()
          return ([...state, { text: text.trim(), id: generateId() }])
        }

      case 'delete-task':
        return state.filter(el => el.id !== action.payload.id)

      default:
        return state
    }
  }

  const [modalVisible, setModalVisible] = React.useState(false);

  const [state, dispatch] = React.useReducer(reducer, [
    { text: 'Feed your dog', id: 'justrandom' },
    { text: 'Bring the water', id: 'idkyk2005zxc' },
    { text: 'final', id: 'ilovecowboybebop1998' },
  ])

  const [loaded] = useFonts({
    PacificoRegular: require('./assets/fonts/Pacifico-Regular.ttf'),
    LatoRegular: require('./assets/fonts/Lato-Regular.ttf'),
    LatoBold: require('./assets/fonts/Lato-Bold.ttf'),
    LatoItalic: require('./assets/fonts/Lato-Italic.ttf'),
    RobotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    RobotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
  })
  if (!loaded) {
    return null
  }



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>

        <Header modalVisible={modalVisible} setModalVisible={setModalVisible} />

          <View style={styles.tasks}>
            <FlatList
              style={styles.scroll}
              data={state}
              renderItem={({ item }) => <Task dispatch={dispatch} title={item.text} id={item.id} />}
              keyExtractor={(item) => item.id}
            />
          </View>

      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >

        <BlurView tint={'light'} intensity={40} style={styles.modal}>
          <View style={styles.modalWrapper}>
          <Button title='close pop up' onPress={() => setModalVisible(false)}></Button>
          <WriteTask taskItems={state} dispatch={dispatch} />
          </View>
        </BlurView>

      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFA',
  },

  wrapper: {
    height: '90%',
    flex: 1,
  },

  tasksContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    flex: 1
  },

  scroll: {
    height: '85%',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },

  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },

  modalWrapper: {
    width: '80%',
    height: '80%',
    borderRadius: 8,
    backgroundColor: '#ffffff'
  },

  addTaskButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    display: 'flex',
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#9F6868',
    alignItems: 'center',
    justifyContent: 'center'
  },

  addTaskIcon: {
    width: 30,
    height: 30,
  },

  footer: {
    alignItems: 'flex-end'
  }
})