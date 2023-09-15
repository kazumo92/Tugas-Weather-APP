import { Text, View, TextInput } from "react-native";
import {s} from "./InputStyle";


export function Input (){
return (
<View style={s.root}>
    <TextInput 
    maxLength={3}
    styles={s.input} 
    placeholder="Masukkan Temperatur: " />
    <Text style={s.unit}>C</Text>

</View>

);

}