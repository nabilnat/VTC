import { Text } from "react-native";
import { useSelector } from "react-redux";


export default function index(){
   const state =useSelector((state:any)=>state.auth);
   console.log(state)
    return(
        <Text>
            login
        </Text>
    )
}