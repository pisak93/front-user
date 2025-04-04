import { Pressable, Text, TextInput, View } from "react-native";
import { useState } from "react";
import axios from "axios";
import { router } from "expo-router";

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
    <View>
      <Text>Registro de usuario</Text>
      <Text>Nombre</Text>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} />
      <Text>Apellido</Text>
      <TextInput placeholder="Apellido" value={apellido} onChangeText={setApellido} />
      <Text>Correo</Text>
      <TextInput placeholder="Email" value={correo} onChangeText={setCorreo} />
      <Text>Contraseña</Text>
      <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword} />
      <Text>Telefono</Text>
      <TextInput placeholder="Teléfono" value={telefono} onChangeText={setTelefono} />
      <Pressable onPress={enviarDatos}>
        <Text>Registrar</Text>
      </Pressable>
    </View>
  );
}
export default Index;