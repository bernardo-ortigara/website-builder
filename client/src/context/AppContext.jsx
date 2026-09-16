import { createContext } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import api from '../api/api'
import {useEffect} from 'react'

const AppContext = createContext(undefined);

export function AppContextProvider({children}){

    // Auth States
    const [user, setUser] = useState(null);
    const [loadingUser, setLoading] = useState(true);

    // Auth Actions
    const checkSession = async () => {
        try{
            const{data} = await api.get('/api/auth/me');
            setUser(data.user); 
        }
        catch(error){
            setUser(null);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        checkSession();
    },[checkSession]);

    return (
        <AppContext.Provider value={{user, loadingUser}}>   
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    const context = useContext(AppContext);
    if (context === undefined){
        throw new Error("useAppContext must be used within an AppContextProvider")
    }
    return context;
}