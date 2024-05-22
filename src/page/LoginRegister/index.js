import React from "react";
import { useAuth } from "~/context/AuthContext";
import Modallogin from "./login";
import ModalRegister from "./Register";

export default function LoginRegister() {
  const { isModalOpen, swap } = useAuth();

  if (!isModalOpen) return null;

  return (
    <div className="flex justify-center items-center fixed inset-0 z-50 bg-[rgba(0,0,0,.6)] p-4 sm:p-0">
      {swap === "login" ? <Modallogin /> : <ModalRegister />}
    </div>
  );
}
