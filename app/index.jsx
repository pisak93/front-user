import { Pressable, Text, TextInput, View } from "react-native";
import { useState } from "react";
import axios from "axios";
import { router } from "expo-router";
import styles from "../assets/styles/StylesApp";

function Index() {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [activo, setActivo] = useState(true);

  function enviarDatos() {
    console.log("enviarDatos");
const UsuarioData={
  nombre: nombre,
  apellido: apellido,
  correo: correo,
  password: password,
  telefono: telefono,
  activo: activo
};
   axios.post("http://192.168.0.3:5000/registrar",UsuarioData)
   .then(function (res){
    console.log(res.data);
   
    if(res.data.status){
      alert("Usuario registrado con éxito");
      setTimeout(function(){
        router.replace("./confirmacion");
      }, 500);
    }else{
      alert(res.data.message);
    }
   })
   .catch(function (error) {
      console.log(error);
      alert("Error al registrar el usuario");
    });

  }


  return (
    <View style={styles.container}>
      <Text style={styles.title} >Registro de usuario</Text>
      <Text style={styles.text}>Nombre</Text>
      <TextInput  style={styles.input} placeholder="Nombre" value={nombre} onChangeText={setNombre} />
      <Text style={styles.text}>Apellido</Text>
      <TextInput style={styles.input} placeholder="Apellido" value={apellido} onChangeText={setApellido} />
      <Text style={styles.text}>Correo</Text>
      <TextInput style={styles.input} placeholder="Email" value={correo} onChangeText={setCorreo} />
      <Text style={styles.text}>Contraseña</Text>
      <TextInput style={styles.input} placeholder="Contraseña" value={password} onChangeText={setPassword} />
      <Text style={styles.text}>Telefono</Text>
      <TextInput style={styles.input} placeholder="Teléfono" value={telefono} onChangeText={setTelefono} />
      <Pressable onPress={enviarDatos} style={styles.button}>
        <Text style={styles.buttonText}>Registrar</Text>
      </Pressable>
    </View>
  );
}
export default Index;