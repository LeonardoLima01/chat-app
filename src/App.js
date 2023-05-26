import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import { auth, provider } from "./firebase";
import {
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import ChatPage from "./components/ChatPage";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [profileImage, setProfileImage] = useState();

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setIsLogged(true);
      setProfileImage(result.user.photoURL);
    } catch (error) {
      console.log("Error signing in:", error);
    }
  };

  // Event listener to change IsLogged state based on user auth state
  useEffect(() => {
    setPersistence(auth, browserSessionPersistence) // Set long-term persistence
      .then(() => {
        // Auth state persistence is set
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setIsLogged(true);
            setProfileImage(user.photoURL);
          } else {
            setIsLogged(false);
          }
        });
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {!isLogged ? (
        <LandingPage handleClick={signIn} />
      ) : (
        <ChatPage profileImage={profileImage} />
      )}
    </div>
  );
}

export default App;
