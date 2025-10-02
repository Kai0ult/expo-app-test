import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(26, 22, 50, 0.96)',
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        color: '#ffff',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'rgba(18, 146, 237, 1)',
        padding: 20,
        borderRadius: 10,
        borderColor: '#000000ff',
        marginTop: 10,
        marginBottom: 16,
        textAlign: 'center',
    },
    titleButton: {
        color: '#000000ff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center'
    },
    button1: {
        flex: 1,
        padding: 6,
        backgroundColor: 'rgba(41, 234, 23, 1)',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10
    },
    button2: {
        flex: 1,
        padding: 6,
        backgroundColor: 'rgba(255, 61, 61, 1)',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10
    },
    scrollView: {
        marginTop: 30,
        flexGrow: 1,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
    }

});