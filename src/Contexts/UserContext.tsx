import React, { createContext, useState } from "react";
//@ts-nocheck
const UserContext = createContext({
  user: {},
  firstName: "",
  lastName: "",
  emailId: "",
  setFirstName: () => {},
  setLastName: () => {},
  setEmailId: () => {},
});

UserContext.displayName = "UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  const userState = {
    user,
    firstName,
    lastName,
    emailId,
    setUser,
    setFirstName,
    setLastName,
    setEmailId,
  };
  return (
    // 👇️ ts-nocheck ignores all ts errors in the file
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-nocheck

    // 👇️ ts-ignore ignores any ts errors on the next line
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
