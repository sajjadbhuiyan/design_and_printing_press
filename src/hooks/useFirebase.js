import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [authError, setAuthError] = useState('');

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

// user registration
const handleRegistration = (email, password, name) =>{

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        setAuthError('');
        const newUser = {email, displayName:name}
        setUser(newUser);
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
          }).catch((error) => {
          });
      })
      .catch((error) => {
        setAuthError(error.message);
      });
    //   history.push('/');
}


//login system


const handleLogin = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const destination = location?.state?.from || '/home';
        history.replace(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      });

}


const logOut = () => {
    signOut(auth)
    .then(() =>{ });
}

    return{
        user,
        handleRegistration,
        handleLogin,
        signInUsingGoogle,
        logOut,
        authError
    }
}

export default useFirebase;