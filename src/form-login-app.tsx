import React from "react";
import { FormLogin } from "./components/form-login";
import { FormRegister } from "./components/form-register";

export const FormLoginApp: React.FC = () => {
  return (
    <div>
      <FormLogin />
      <hr />
      <FormRegister />
    </div>
  );
};
