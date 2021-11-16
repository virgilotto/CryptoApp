import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        padding: 20,
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        height: '40%',
        aspectRatio: 1,
    },
    header1: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15
    },
    header2: {
        fontSize: 20,
        textAlign: 'center',
        color: '#707070'
    },
    buttonImage: {
        height: 50, 
        resizeMode: 'contain',
        width: '100%'
    },
    googleButton: {
        marginTop: 'auto', 
        marginBottom: 50,
        width: '70%'
    }
})

export default styles;