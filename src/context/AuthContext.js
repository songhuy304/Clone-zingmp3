// src/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
      const storeUser = JSON.parse(localStorage.getItem("user"));
      const storeToken = localStorage.getItem("accessToken");
      if (storeUser && storeToken) {
        setUser(storeUser);
        setAccessToken(accessToken);
      }
    }, []);


    const login = (userData) => {
        setUser(userData.data);
        setAccessToken(userData.accessToken);
        localStorage.setItem('user', JSON.stringify(userData.data));
        localStorage.setItem('accessToken', userData.accessToken);
    };

    const logout = () => {
        setUser(null);
        setAccessToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
