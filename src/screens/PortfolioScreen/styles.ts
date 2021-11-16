import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white'
    },
    balanceContainer: {
        width: '100%',
        marginVertical: 20
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#585858'
    },
    balance: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000'
    },
    image: {
        height: 175,
        resizeMode: 'contain',
    }
})

export default styles;