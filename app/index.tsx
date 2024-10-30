import { Image, View } from "react-native";
import { ReactLogo } from "@/utils/images";
import { useState } from "react";
import { Redirect } from "expo-router";
import { useSelector } from "react-redux";
import { useGetUserMutation } from "@/services/user";
export default async function index ()
{
    const [postData] = useGetUserMutation();
    const [formData, setFormData] = useState({
        email: 'taabane.amar@gmail.com',
        password:'nabil'
        });
      //  const data=true
    const data=await postData(formData).unwrap(); 
    return (
           
                <View>
                    <Image source={ReactLogo}>
                    </Image>
                    {
                    !data ?
                    (<Redirect href={"/(routes)/Index"}></Redirect>)
                    :
                    (<Redirect href={"/(tabs)"}></Redirect>)
                    }
                </View>
           
            
        
        
        
    )
}