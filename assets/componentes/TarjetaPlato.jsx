import { View, Text } from "react-native";



function TarjetaPlato({nombre,categoria,precio}){



    return(
<View>
    <Text> {nombre}</Text>
    <Text>{categoria}</Text>
    <Text>${precio}</Text>

</View>

    )
}

export default TarjetaPlato;