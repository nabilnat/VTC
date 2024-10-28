import { createSlice, PayloadAction} from '@reduxjs/toolkit';

interface User {
                isLogged:boolean,
                id:number,
                name:string,
                acces_token:string,
                firstTime:boolean
}



const initialState: User ={
 
        isLogged:false,
        id:0,
        name:"",
        acces_token:"",
        firstTime:true
  
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        LOGIN: (state:any, action:PayloadAction<Partial<User>>) => { 
              state.auth={...state.auth,
                          isLogged:true,
                          id:action.payload.id,
                          name:action.payload.name,
                          acces_token:action.payload.acces_token,
                        }   
        },
        LOGOUT: (state:any) => {
                state.auth={...state.auth,
                            isLogged:false,
                            id:0,
                            name:"",
                            acces_token:"",
                            }    
        },
        REGESTER: (state:any, action:PayloadAction<Partial<User>>)=> {
                  state.auth={...state.auth,
                              isLogged:true,
                              id:action.payload.id,
                              name:action.payload.name,
                              acces_token:action.payload.acces_token,
                              }   
        } ,
        VISITE:(state:any)=> {
           
            state={...state,firstTime:"false"}
                        
            
        }


      }
    }
);
export const { LOGIN, LOGOUT , REGESTER ,VISITE} = authSlice.actions;

export default authSlice.reducer;