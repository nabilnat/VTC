import { Text } from "react-native";
import { useSelector } from "react-redux";


export default function index(){
    const user= useSelector((state:any)=>state.auth)
    console.log(user)
    return(
        <Text>
            hello
        </Text>
    )
}