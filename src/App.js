import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import { addMessage, auth, provider } from "./firebase";
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
  const [username, setUsername] = useState();

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setIsLogged(true);
      setProfileImage(result.user.photoURL);
    } catch (error) {
      console.log("Error signing in:", error);
    }
  };

  const handleAddMessage = (e) => {
    e.preventDefault(); // Prevent form submit
    let text = document.querySelector("#message").value;
    addMessage(username, text);
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
            setUsername(user.displayName);
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
        <ChatPage
          profileImage={profileImage}
          handleAddMessage={handleAddMessage}
        />
      )}
    </div>
  );
}

export default App;
