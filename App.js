import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useFonts } from 'expo-font'
import { Font } from 'expo'
import Main from './Components/Main'
import styles from './styles'


export default function App() {

  const [loaded] = useFonts({
    PacificoRegular: require('./assets/fonts/Pacifico-Regular.ttf'),
    LatoRegular: require('./assets/fonts/Lato-Regular.ttf'),
    LatoBold: require('./assets/fonts/Lato-Bold.ttf')
  })

  if (!loaded) {
    return null
  }

  return (
    <View style={styles.wrapper}>
      <StatusBar style="auto" />
      <Main />
    </View>
  );
}
