import { View,Text,FlatList, ScrollView, Pressable} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import TarjetaPedido from "../assets/componentes/TarjetaPedido";
import styles from "../assets/styles/StylesApp";
import { TextInput } from "react-native-web";



function Pedidos(){ 

const[pedidos,setPedidos]=useState({});
const [fecha, setFecha] = useState("");


useEffect(function(){
 obtenerPedidos();
   },[]);

  function obtenerPedidos(){
    const pedidosData= axios.get("https://clase-back.onrender.com/assets/pedidos-completos")
    .then(function(res){
        console.log(res.data);
        if(res.data.status){
          setPedidos(res.data.data);
        }
    })
    .catch(function(error){
        console.log(error);
        alert("Error al obtener los pedidos");
    });
  }

  function consultarPorFecha(){
   

    const pedidosData= axios.get("https://clase-back.onrender.com/assets/pedidos/solo-platos",{params:{fecha:fecha}})
    .then(function(res){
       console.log(res.data);
        if(res.data.status){
          setPedidos(res.data.data);
        }
    }).catch(function(error){
        console.log(error);
        alert("Error al obtener los pedidos");
    });
  }
  
   console.log(pedidos);
const item= function({item}){
    return(
        <TarjetaPedido fecha={item.fecha} platos={item.platos} total={item.total}/>
    )   }

    return(
        <View style={{flex:1}}>
          <Text>Ingrese el año</Text>
          <TextInput placeholder="EJ:2005" value={fecha} onChangeText={setFecha} />
        <Pressable onPress={consultarPorFecha}>
            <Text>Filtrar</Text>
        </Pressable>
            <Text>Pedidos de {fecha}</Text>
            <ScrollView>
            <FlatList
            data={pedidos}

            renderItem={item}
       
            />
            </ScrollView>
           
        </View>
    )
}

export default Pedidos;