import React, { createContext, useState } from "react";
//@ts-nocheck
//@ts-ignore
const FirebaseContext = createContext({
  firebaseConfig: {},
  setFirebaseConfig: (config: object) => {},
  firebaseStorageConfig: {},
  setFirebaseStorageConfig: (storageConfig: object) => {},
  // firebaseAuth: {},
  // setFirebaseAuth: React.Dispatch<React.SetStateAction<string>>
});

FirebaseContext.displayName = "FirebaseContext";

const FirebaseProvider = ({ children }) => {
  const [firebaseConfig, setFirebaseConfig] = useState<object>({});
  const [firebaseStorageConfig, setFirebaseStorageConfig] = useState<object>(
    {}
  );
  // const [firebaseAuth, setFirebaseAuth] = useState({});

  const firebaseState = {
    firebaseConfig,
    firebaseStorageConfig,
    setFirebaseConfig,
    setFirebaseStorageConfig,
    // firebaseAuth,
    // setFirebaseAuth,
  };
  return (
    <FirebaseContext.Provider value={firebaseState}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider };
