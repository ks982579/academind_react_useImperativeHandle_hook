import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { },
});

export const AuthContextProvider = (props) => {
    let storedLoginInfo = localStorage.getItem("isLoggedIn");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (storedLoginInfo === "1") {
          setIsLoggedIn(true);
        }
      }, [storedLoginInfo]);

    const logoutHandler = () => {
        localStorage.setItem("isLoggedIn", "0")
        setIsLoggedIn(false);
    };
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true);
    };
    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;