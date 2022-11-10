import { createContext, ReactNode } from "react";
import * as AuthSession from 'expo-auth-session';


interface UserProps {
    name: string;
    avatarUrl: string;
}

export interface AuthContextDataProps {
    user: UserProps;
    signIn: () => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode
}


export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {

   console.log(AuthSession.makeRedirectUri({ useProxy: true }));

    async function signIn() {
        console.log('Vamos logar!')
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            user: {
                name: 'Sávio',
                avatarUrl: 'http://github.com/Savio-Anjos.png'
            }
        }}>
            { children }

        </AuthContext.Provider>
    )
}