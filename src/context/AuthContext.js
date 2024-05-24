// src/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import { accountApi } from "~/Api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favouriteMusic , setFavouriteMusic] = useState();
  const [swap, setSwap] = useState("login");
  
  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");
    if (storedToken) {
      setAccessToken(storedToken);
    }
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLogin(true);
    }
  }, []);

  useEffect(() => {
    if (!accessToken) {
      const mess = 'Chưa Đăng nhập';
      return; // Không trả về giá trị gì từ useEffect nếu không có accessToken
    }
  
    const fetchDataList = async () => {
      try {
        const res = await accountApi.getSongFavorite(accessToken);
        const favoriteMusicIds = res.data.map(item => item.id_music);
        setFavouriteMusic(favoriteMusicIds);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchDataList();
  }, [accessToken]); // Chỉ thêm accessToken vào dependency array

  const SetUser = (userData) => {
    setUser(userData.data);
    setAccessToken(userData.accessToken);
    localStorage.setItem("accessToken", userData.accessToken);
    localStorage.setItem("user", JSON.stringify(userData.data));
    setIsModalOpen(false); // Close modal on login
    setIsLogin(true);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const logout = () => {
    window.location.reload();
    setUser(null);
    setAccessToken(null);
    setIsLogin(false);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogin,
        accessToken,
        logout,
        toggleModal,
        SetUser,
        isModalOpen,
        setSwap,
        setIsModalOpen,
        swap,
        favouriteMusic,
        setFavouriteMusic
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
