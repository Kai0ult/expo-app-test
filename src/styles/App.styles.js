import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    back: {
        flex: 1,
        backgroundColor: 'rgba(49, 41, 93, 1)',
    },  
    container: {
        flex: 1,
        backgroundColor: 'rgba(49, 41, 93, 0.91)',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 1050,
        alignContent: 'center',
    },
    title: {
        color: '#ffff',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'rgba(18, 146, 237, 1)',
        padding: 10,
        borderRadius: 10,
        borderColor: '#000000ff',
        marginTop: 40,
        marginBottom: 7,
        textAlign: 'center',
        maxWidth: 300,
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
    },
    text: {
        backgroundColor: 'rgba(84, 87, 102, 1)',
        color: '#ffff',
        fontSize: 14,
        fontWeight: 'light',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#ffff',
        maxWidth: 300,
        padding: 4,
        textAlign: 'justify',
    }

});