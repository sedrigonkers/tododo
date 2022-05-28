import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  ScrollView,
  Button,
  Dimensions
} from 'react-native'
import { useFonts } from 'expo-font'
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
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf')
  })
  if (!loaded) {
    return null
  }


  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>

        <Header />

        <View style={styles.tasks}>
          <ScrollView style={styles.scroll}>
            {state.map((el, index) => <Task dispatch={dispatch} key={index} title={el.text} id={el.id} />)}
          </ScrollView>
        </View>
      </View>

      <WriteTask taskItems={state} dispatch={dispatch} />
      {/* <Button title='dispatch' onPress={() => dispatch({type: 'add-task'})}/> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFA',
  },

  wrapper: {
  },

  tasksContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    flex: 1
  },

  scroll: {
    height: '80%',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },

  tasks: {
    borderColor: '#9F6868',
    borderTopWidth: 2,
    borderBottomWidth: 2,
  }
})