import { Stack } from "expo-router";

 function RootLayout() {
  return (
  
  <Stack initialRouteName="index" screenOptions={{
    headerTitleAlign: "center"
  }}>
    <Stack.Screen name="index" options={{title:"Registrar", headerBackVisible:false}} />
    <Stack.Screen name="confirmacion" options={{headerShown:false}} />
    </Stack>
  )
}
export default RootLayout;