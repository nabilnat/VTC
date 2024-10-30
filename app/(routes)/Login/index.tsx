import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { VISITE } from "@/redux/reducers/authReducer"
import { router } from "expo-router";



export default function index(){
   
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    
   
    return(
        <View>
            <TextInput
                placeholder="email"
                value={email}
                onChangeText={setemail}
                style={styles.textinput}

             />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={setpassword}
                secureTextEntry
                style={styles.textinput}
            />

            <Pressable onPress={()=>{router.push("/Register")}}>
                <Text>
                    sign up
                </Text>
            </Pressable>
            
        </View>
    )
}
const styles=StyleSheet.create({
    textinput:{
        backgroundColor:"red"
    }
})