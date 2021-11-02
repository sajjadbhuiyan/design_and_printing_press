import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();
    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        
    }
    
    useEffect(() =>{
        const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
        })
        return () => unsubscribed;
    },[])

    const logOut = () => {
        signOut(auth)
        .then(() =>{ });
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    //registration 
    const handleRegistration = (e) =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Set password at least 6 char');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setError('');
        })

        .catch(error => {
            setError(error.message);
        })
        
    }

    //login
    const handleLogin = (e,email, password) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setError('');
        })
        .catch(error => {
            setError(error.message);
        })
    }

    return{
        user,
        error,
        email,
        password,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        handleLogin
    }
}

export default useFirebase;