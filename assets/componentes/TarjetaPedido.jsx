import { View, Text, FlatList } from "react-native";
import TarjetaPlato from "./TarjetaPlato";


function TarjetaPedido({fecha,platos,total}){
    console.log(platos);

const item= function({item}){
    return(
        <TarjetaPlato nombre={item.nombre} categoria={item.categoria} precio={item.precio}/>
    )   }

    return(
<View>
    <Text>Fecha: {fecha}</Text>
    <FlatList
    data={platos}
    renderItem={item}
    />
    <Text>Total: ${total}</Text>

</View>

    )
}

export default TarjetaPedido;