import React from 'react'
import {
  View,
  StyleSheet,
  Keyboard,
  SafeAreaView,
  FlatList,
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { useFonts } from 'expo-font'

import Header from './Components/Header'
import Task from './Components/Task'
import WriteTask from './Components/WriteTask'

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


          <WriteTask taskItems={state} dispatch={dispatch} setModalVisible={setModalVisible} modalVisible={modalVisible}/>

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
    flex: 1,
  },

  scroll: {
    height: '85%',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
})