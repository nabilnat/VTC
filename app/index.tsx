import { Image, View } from "react-native";
import { ReactLogo } from "@/utils/images";
import { useState } from "react";
import { Redirect } from "expo-router";
import { Provider } from "react-redux";
import store from "@/redux/store";
export default function index ()
{
   const [isLogin ,setIsLogin]= useState(true)
    return (
           
                <View>
                    <Image source={ReactLogo}>
                    </Image>
                    {
                    isLogin ?
                    (<Redirect href={"/(routes)/Index"}></Redirect>)
                    :
                    (<Redirect href={"/(tabs)"}></Redirect>)
                    }
                </View>
           
            
        
        
        
    )
}