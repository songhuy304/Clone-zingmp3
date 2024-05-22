import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { useAuth } from '~/context/AuthContext';
import { accountApi } from '~/Api'
import { toast  } from 'react-toastify';
import { SpinnerLoading } from '~/assets';

export default function Modallogin() {
  const { toggleModal , setSwap , SetUser } = useAuth();
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [loading ,setLoading ] = useState(false);
  const [error, setError] = useState('');


  const LoginHandle = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (email === '' || password === '') {
      toast('Bạn chưa nhập đủ thông tin');
      setLoading(false);
      return;
    }
    try {
      const response = await accountApi.Login(email, password);
      SetUser(response);
      toggleModal(); // Assuming you want to close the modal on success
    } catch (error) {
      const errorMessage =
      error.response?.data?.message || "Đã xảy ra lỗi khi đăng nhập";
      setError(errorMessage);
      toast(errorMessage);
      console.error("Đã xảy ra lỗi khi đăng nhập:", errorMessage);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <div className="w-full max-w-md sm:max-w-lg rounded-lg flex flex-col p-5 bg-[#130c1c]">
        <h3 className="text-white text-lg sm:text-[25px] font-semibold pt-2 relative text-center">
          Đăng Nhập
          <span onClick={toggleModal} className="absolute right-0 top-0">
            <button className="h-10 w-10 bg-slate-600 rounded-full p-2 flex justify-center items-center">
              <IoCloseSharp />
            </button>
          </span>
        </h3>
        <div>
          <div className="text-white mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none bg-slate-900 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your@email.com"
              required
              autoComplete="off"
              value={email}
              onChange={(e) =>setEmail(e.target.value) }
            />
          </div>
          <div className="text-white mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700   dark:text-gray-300 mb-2"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
                
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                defaultChecked
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <span
              onClick={() => setSwap("register")}
              className="cursor-pointer text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Account
            </span>
          </div>

          <button
            onClick={LoginHandle}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? <SpinnerLoading /> :  'Login'}
          </button>
        </div>
      </div>
    </>
  );
}

