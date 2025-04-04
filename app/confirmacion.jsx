import { router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";

function Confirmacion(){

    function regresar(){
      router.replace("/");
    }
return(
    <View>
        <Text>Registro de usuario</Text>
        <Text>Usuario registrado con éxito</Text>
        <Pressable onPress={regresar}>
            <Text>Regresar</Text>
        </Pressable>
    </View>
)
}

export default Confirmacion;