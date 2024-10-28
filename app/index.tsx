import { Image, View } from "react-native";
import { ReactLogo } from "@/utils/images";
import { useState } from "react";
import { Redirect } from "expo-router";
import { useSelector } from "react-redux";

export default function index ()
{
    const isLogged= useSelector((state:any)=>state.auth.isLogged)
    return (
           
                <View>
                    <Image source={ReactLogo}>
                    </Image>
                    {
                    !isLogged ?
                    (<Redirect href={"/(routes)/Index"}></Redirect>)
                    :
                    (<Redirect href={"/(tabs)"}></Redirect>)
                    }
                </View>
           
            
        
        
        
    )
}