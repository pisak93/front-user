import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 50,
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: "80%",
        borderRadius: 10
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        width: "80%"
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    card: {
        width:"80%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffe7ab",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textCard: {
        fontSize: 16,
        marginBottom: 20,
        width: "80%",
        textAlign: "center",
    },

});
export default styles;