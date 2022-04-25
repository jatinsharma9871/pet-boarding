import axios from "axios";
import { createContext, useContext, useState } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({children}) => {

  const handleSubmit = (Name, Email, Password) => {
    axios.post("http://localhost:8080/users", {
      name: Name,
      email: Email,
      password: Password
    }).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  return <FormContext.Provider value={{handleSubmit}}>{children}</FormContext.Provider>
}