import { View,Text,FlatList, ScrollView} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import TarjetaPedido from "../assets/componentes/TarjetaPedido";
import styles from "../assets/styles/StylesApp";



function Pedidos(){ 

const[pedidos,setPedidos]=useState({});


useEffect(function(){
 obtenerPedidos();
   },[]);

  function obtenerPedidos(){
    const pedidosData= axios.get("http://192.168.0.3:5000/assets/pedidos-completos")
    .then(function(res){
        console.log(res.data);
        if(res.data.status){
          setPedidos(res.data.data);
        }
    });
  }

   console.log(pedidos);
const item= function({item}){
    return(
        <TarjetaPedido fecha={item.fecha} platos={item.platos} total={item.total}/>
    )   }

    return(
        <View style={{flex:1}}>
            <Text>Pedidos</Text>
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