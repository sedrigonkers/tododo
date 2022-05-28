import { View, Text } from 'react-native'
import styles from '../styles'

function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.headerInner}>
                <Text style={styles.headerLogo}>ToDoDo</Text>
            </View>
        </View>
    )
}

export default Header