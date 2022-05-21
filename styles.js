import { StyleSheet, Dimensions } from 'react-native';

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({

    header: {
        width: 100 + '%',
        height: 20 + '%', 
        backgroundColor: '#9F6868',
        borderRadius: 20,
        position: 'relative',
    },
    headerInner: {
        position: 'relative',
        top: 50 + '%'
    },
    headerLogo: {
        fontFamily: 'PacificoRegular',
        fontSize: 44,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    container: {
        height: 100 + '%'
    },
    wrapper: {
        flex: 1,
        backgroundColor: '#FDF5F5',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: 100 + '%',
        height: ScreenHeight,
    },
});

export default styles