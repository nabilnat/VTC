import { Redirect } from "expo-router";
import { View } from "react-native";
import { useSelector } from "react-redux";

export default function index ()
{
    const firstTime = useSelector((state:any)=>state.auth.firstTime)
    
    return firstTime ?
            (<Redirect href={"/(routes)/Onboarding"}></Redirect>):
            (<Redirect href={"/(routes)/Login"}></Redirect>)
   
        
    
}