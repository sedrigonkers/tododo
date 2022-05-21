import { StyleSheet, Dimensions } from 'react-native';

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({

    wrapper: {
        flex: 1,
        backgroundColor: '#FDF5F5',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: 100 + '%',
        height: ScreenHeight,
    },
    container: {
        height: 100 + '%',
    },

    header: {
        width: 100 + '%',
        height: 15 + '%',
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
        marginLeft: 15,
        marginRight: 15,
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
    }

});

export default styles