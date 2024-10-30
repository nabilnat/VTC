import { useEffect } from "react";
import { Pressable, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { VISITE } from "@/redux/reducers/authReducer"
import { router } from "expo-router";

export default function index(){
    
    return(
        <Text>
            hello hhhhhhhhhhhhh
            <Pressable onPress={()=>router.push('/(routes)/Login')}>
                <Text>
                    go login
                </Text>
            </Pressable>
        </Text>
    )
}