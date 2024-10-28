import { useEffect } from "react";
import { Pressable, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { VISITE } from "@/redux/reducers/authReducer"
import { router } from "expo-router";

export default function index(){
    
    const user= useSelector((state:any)=>state.auth)
   
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(VISITE())
    
      
    }, [])
    
    return(
        <Text>
            hello
            <Pressable onPress={()=>router.push('/(routes)/Login')}>
                <Text>
                    go login
                </Text>
            </Pressable>
        </Text>
    )
}