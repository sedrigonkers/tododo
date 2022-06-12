import React from 'react'
import {
  View,
  StyleSheet,
  Keyboard,
  SafeAreaView,
  FlatList,
  Text,
  Dimensions,
  Animated,
  useWindowDimensions
} from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import SwipeableFlatList from 'react-native-swipeable-list'
import { useFonts } from 'expo-font'
import Header from './Components/Header'
import Task from './Components/Task'
import WriteTask from './Components/WriteTask'


export default function App() {

  const { width, height } = useWindowDimensions()

  const touch = React.useRef(
    new Animated.ValueXY({ x: 50, y: 50 })
  ).current

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
    { text: 'final last', id: 'ilovecowboybebop1998' },
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
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.wrapper}>

        <Header modalVisible={modalVisible} setModalVisible={setModalVisible} />

        {/* <View style={styles.tasks}>
          <SwipeableFlatList
            style={styles.scroll}
            data={state}
            renderItem={({ item }) => <Task dispatch={dispatch} title={item.text} id={item.id} />}
            renderHiddenItem={() => <Text>hehee</Text>}
            keyExtractor={(item, idx) => item.id + idx}
            rightOpenValue={-75}
            leftOpenValue={75}
          />
        </View>

        <WriteTask taskItems={state} dispatch={dispatch} setModalVisible={setModalVisible} modalVisible={modalVisible} /> */}

        <View
          onStartShouldSetResponder={() => true}
          onResponderMove={(event) => {
            touch.setValue({
              x: event.nativeEvent.locationX,
              y: event.nativeEvent.locationY,
            })
          }}
          style={{ flex: 1 }}
        >
          <Animated.View
            style={{
              height: 40,
              width: 40,
              position: 'absolute',
              left: Animated.subtract(touch.x, 20),
              top: Animated.subtract(touch.y, 20),
              backgroundColor: 'yellow',
              borderRadius: 20,
              borderWidth: 2,
              borderColor: '333'
            }}>
          </Animated.View>

        </View>

      </View>


    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '95%',
    backgroundColor: '#FFFAFA',
  },

  wrapper: {
    height: '90%',
    flex: 1,
  },

  tasks: {
    justifyContent: 'center',
    flex: 1,
  },

  scroll: {
    paddingHorizontal: 20,
  },
})