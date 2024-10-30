import { Redirect } from "expo-router";
import { View } from "react-native";
import { useSelector } from "react-redux";

export default function index ()
{
    const firstTime =false
    return firstTime ?
            (<Redirect href={"/(routes)/Onboarding"}></Redirect>):
            (<Redirect href={"/(routes)/Login"}></Redirect>)
   
        
    
}