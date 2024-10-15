import { createSlice, PayloadAction} from '@reduxjs/toolkit';

interface User {
                isLogged:boolean,
                id:number,
                name:string,
                acces_token:string,
                firsttime:boolean
}

interface UserState {
    user: User | null;
}

const initialState: UserState ={
    user:{
        isLogged:false,
        id:0,
        name:"",
        acces_token:"",
        firsttime:true
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        LOGIN: (state:any, action:PayloadAction<Partial<User>>) => { 
              state.user={...state.user,
                          isLogged:true,
                          id:action.payload.id,
                          name:action.payload.name,
                          acces_token:action.payload.acces_token,
                          firsttime:false
                        }   
        },
        LOGOUT: (state:any) => {
                state.user={...state.user,
                            isLogged:false,
                            id:0,
                            name:"",
                            acces_token:"",
                            firsttime:false
                            }    
        },
        REGESTER: (state:any, action:PayloadAction<Partial<User>>)=> {
                  state.user={...state.user,
                              isLogged:true,
                              id:action.payload.id,
                              name:action.payload.name,
                              acces_token:action.payload.acces_token,
                              firsttime:false
                              }   
        } ,
      }
    }
);
export const { LOGIN, LOGOUT , REGESTER } = authSlice.actions;
export default authSlice.reducer;