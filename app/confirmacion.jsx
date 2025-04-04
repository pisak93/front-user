import { router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";
import styles from "../assets/styles/StylesApp";

function Confirmacion(){

    function regresar(){
      router.replace("/");
    }
return(
    <View style={styles.container}>
        <View style={styles.card}>
        <Text style={styles.title} >Registro de usuario</Text>
        <Text style={styles.textCard}>Usuario registrado con éxito</Text>
        <Pressable style={styles.button} onPress={regresar}>
            <Text style={styles.buttonText}>Regresar</Text>
        </Pressable>
        </View>
       
    </View>
)
}

export default Confirmacion;