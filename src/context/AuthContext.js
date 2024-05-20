// src/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isLogin, setIsLogin] = useState(false);
    const [accessToken, setAccessToken] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [swap, setSwap] = useState('login');

    

    useEffect(() => {
      const storeUser = JSON.parse(localStorage.getItem("user"));
      const storeToken = localStorage.getItem("accessToken");
      if (storeUser && storeToken) {
        setUser(storeUser);
        setAccessToken(accessToken);
      }
    }, []);

    const SetUser = (userData) => {
      setUser(userData.data);
      setAccessToken(userData.accessToken);
      localStorage.setItem('user', JSON.stringify(userData.data));
      localStorage.setItem('accessToken', userData.accessToken);
      setIsModalOpen(false); // Close modal on login
      setIsLogin(true);
    };
    

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
  };
   
    const logout = () => {
        setUser();
        setAccessToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
    };

    return (
        <AuthContext.Provider value={{user, isLogin, accessToken, logout, toggleModal, isModalOpen ,setSwap , swap}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
