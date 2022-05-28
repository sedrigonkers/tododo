import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  ScrollView
} from 'react-native'
import { useFonts } from 'expo-font'
import Header from './Components/Header'
import Task from './Components/Task'
import WriteTask from './Components/WriteTask'
import { Button } from 'react-native-web'


export default function App() {

  function reducer(state, action) {
    switch (action.type) {
      case 'add-task':
        console.log('action passed')
      default:
        return state
    }
  }


  const [state, dispatch] = React.useReducer(reducer, [
    { text: 'Feed your dog' },
    { text: 'Bring the water' },
    { text: 'Go to the mall' },
  ])


  const [taskItems, setTaskItems] = React.useState(state)


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

        <ScrollView style={styles.scroll}>
          {taskItems.map((el, index) => <Task key={index} title={el.text} />)}
        </ScrollView>


      </View>

      <WriteTask taskItems={taskItems} setTaskItems={setTaskItems} />
      <Button title='dispatch' onPress={() => dispatch({type: 'add-task'})}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFA',
  },

  wrapper: {
    paddingHorizontal: 20
  },

  tasksContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    flex: 1
  },

  // writeTaskWrapper: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  //   position: 'absolute',
  //   bottom: 30,
  //   width: '100%',
  // },

  // input: {
  //   backgroundColor: '#FFFFFF',
  //   borderRadius: 100,
  //   borderWidth: 2,
  //   borderColor: '#9F6868',
  //   paddingHorizontal: 20,
  //   paddingVertical: 10,
  //   width: 250,
  // },

  // addTaskButton: {
  //   display: 'flex',
  //   width: 50,
  //   height: 50,
  // },

  // addTaskIcon: {
  //   backgroundColor: '#9F6868',
  //   borderRadius: 100,
  //   padding: 10,
  // },

  // plus: {
  //   width: 30,
  //   height: 30,
  // },

  scroll: {
    height: '77%'
  }
})