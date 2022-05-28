import { StyleSheet, Dimensions } from 'react-native';

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FDF5F5',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: 100 + '%',
        height: ScreenHeight,
    },
    wrapper: {
    },

    header: {
        height: ScreenHeight * 0.15,
        backgroundColor: '#9F6868',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'relative',
    },
    headerInner: {
        position: 'relative',
    },
    headerLogo: {
        fontFamily: 'PacificoRegular',
        fontSize: 24,
        textAlign: 'center',
        color: '#FFFFFF',
    },

    notes: {
        height: ScreenHeight * 0.75
    },

    noteContainer: {
        padding: 15
    },
    noteTitle: {
        fontFamily: 'LatoBold',
        fontSize: 18,
        color: '#9F6868',
        marginBottom: 5,
    },
    noteContent: {
        fontFamily: 'LatoRegular',
        fontSize: 16,
        color: '#9F6868',
    },

    checkBox: {
    }
});

export default styles