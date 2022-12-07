import React, {useEffect,useState} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../base";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState("");
    const auth = getAuth(app);

    useEffect(() => {
        const unsurscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user.email);
            }
            else{
                setCurrentUser('');
            }
        });

        return () => unsurscribe();
    }, []);


    return(
        <AuthContext.Provider
        value={{
            currentUser
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}