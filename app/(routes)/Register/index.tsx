import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";



export default function index(){
   const [email, setEmail] = useState("")
   const [name, setName] = useState("")
   const [password, setPassword] = useState("")
    return(
        <View>
            <TextInput
            placeholder="email"
            value={email}
            onChangeText={setEmail}
            />
            <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            />
            <TextInput
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            />
            <Pressable>
                <Text>
                    sign up
                </Text>
            </Pressable>
        </View>
    )
}