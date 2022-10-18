import { createContext, useState } from "react";
import { useHistory } from "react-router";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  let history = useHistory();
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState(null);

  const checkIsUserLoggedIn = () => {
    const foundUser = JSON.parse(localStorage.getItem("userInfo"));
    if (foundUser) {
      setUserInfo(foundUser);
      setIsUserLogged(true);
      setUserId(foundUser._id);
      setUserRole(foundUser.role);
      history.push("/dashboard");
      return;
    }
  };

  return (
    <AppContext.Provider
      value={{
        checkIsUserLoggedIn,
        isUserLogged,
        setIsUserLogged,
        userInfo,
        setUserInfo,
        userRole,
        setUserRole,
        userId,
        setUserId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
