import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "~/context/AuthContext";
import { accountApi } from "~/Api";
import { toast } from "react-toastify";
import { SpinnerLoading } from "~/assets";

export default function ModalRegister() {
  const { setSwap, toggleModal , SetUser } = useAuth();
  const [email, setEmail] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const RegisterHandle = async (e) => {
    setLoading(true);
    e.preventDefault();
    if(email === '' || password === '' || userName === ''){
      toast('bạn chưa nhập đủ thông tin');
      return;
    }
    try {
      const response = await accountApi.Register(userName, password, email);
      SetUser(response);
      toggleModal();
    } catch (error) {
      toast(error.response.data.message);
      console.error(
        "Đã xảy ra lỗi khi Đăng ký",
        error.response
      );
      setLoading(false);
    }finally {
      setLoading(false);

    }
  }

  return (
    <>
      <div className="w-full max-w-md sm:max-w-lg rounded-lg flex flex-col p-5 bg-[#130c1c]">
        <h3 className="text-white text-lg sm:text-[25px] font-semibold pt-2 relative text-center">
          Đăng Ký
          <span onClick={toggleModal} className="absolute right-0 top-0">
            <button className="h-10 w-10 bg-slate-600 rounded-full p-2 flex justify-center items-center">
              <IoCloseSharp />
            </button>
          </span>
        </h3>
        <form>
          <div className="text-white mb-4">
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              UserName
            </label>
            <input
              type="text"
              id="userName"
              className="shadow-sm rounded-md w-full px-3 py-2 bg-slate-900 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your UserName"
              required
              autoComplete="off"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
            />
          </div>
          <div className="text-white mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 bg-slate-900 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your@email.com"
              required
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}

            />
          </div>
          <div className="text-white mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 bg-slate-900 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              required
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <span
              onClick={() => setSwap("login")}
              className="cursor-pointer text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Bạn đã có tài khoản!
            </span>
          </div>

          <button
            onClick={loading ? null : RegisterHandle}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? <SpinnerLoading /> : "Login"}
          </button>
        </form>
      </div>
    </>
  );
}
