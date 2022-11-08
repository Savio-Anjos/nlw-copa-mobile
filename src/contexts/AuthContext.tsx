import { createContext, ReactNode } from "react";

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

    async function signIn() {}

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